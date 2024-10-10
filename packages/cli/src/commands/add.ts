import { Command } from 'commander';
import ora from 'ora';
import { z } from 'zod';
import path from 'path';
import fs from 'fs-extra';
import { execSync } from 'child_process';
import fetch from 'node-fetch';

const addCommandSchema = z.object({
  components: z.array(z.string()),
  all: z.boolean(),
  path: z.string().optional(),
});

const INDEX_JSON_URL = 'http://localhost:3000/index.json';

async function fetchIndexJson() {
  const response = await fetch(INDEX_JSON_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch index.json: ${response.statusText}`);
  }
  return response.json();
}

async function addComponent(
  componentName: string,
  targetPath: string,
  indexJson: any,
) {
  const component = indexJson.components[componentName];

  if (!component) {
    throw new Error(`Component "${componentName}" not found.`);
  }

  const targetDir = path.join(targetPath, 'ui', 'groovy-blocks');
  await fs.ensureDir(targetDir);

  for (const file of component.files) {
    const filePath = path.join(targetDir, file.name);
    await fs.writeFile(filePath, file.content);
    console.log(`Created ${filePath}`);
  }

  if (Object.keys(component.dependencies).length > 0) {
    console.log('Installing dependencies...');
    const deps = Object.entries(component.dependencies)
      .map(([name, version]) => `${name}@${version}`)
      .join(' ');
    execSync(`npm install ${deps}`, { stdio: 'inherit' });
  }
}

export const add = new Command()
  .name('add')
  .description('add components and dependencies to your project')
  .argument('[components...]', 'the components to add')
  .option('-a, --all', 'add all available components', false)
  .option(
    '-p, --path <path>',
    'the path to add the component to',
    process.cwd(),
  )
  .action(async (components, opts) => {
    try {
      const options = addCommandSchema.parse({
        components,
        ...opts,
      });

      const spinner = ora('Fetching component data').start();

      const indexJson = await fetchIndexJson();

      spinner.text = 'Adding components';

      if (options.all) {
        components = Object.keys(indexJson.components);
      }

      for (const component of components) {
        await addComponent(component, options.path || process.cwd(), indexJson);
      }

      spinner.succeed('Components added successfully');
    } catch (error: any) {
      console.error('Error:', error.message);
    }
  });
