// function themeChanger() {
//   async function fetchThemeData() {
//     try {
//       const response = await APIMethods.merchant.data();

//       const merchantLogo = response.data.merchantLogo;
//       const merchantName = response.data.merchantName;
//       const root = document.documentElement;
//       const theme = response.data.theme;
//       for (const [key, value] of Object.entries(theme)) {
//         root.style.setProperty(key, value);
//       }
//       return { merchantName, merchantLogo };
//     } catch (error) {
//       console.error("Error fetching theme data", error);
//     }
//   }

//   async function resetThemeToOriginal() {
//     const root = document.documentElement;
//     root.style.setProperty("--background", "hsl(0, 1%, 100%)");
//     root.style.setProperty("--foreground", "hsl(0, 0%, 40.4%)");
//     root.style.setProperty("--primary", "hsl(219, 69%, 48%)");
//     root.style.setProperty("--primaryForeground", "hsl(0, 0%, 100%)");
//     root.style.setProperty("--boxShadow: 0 2px 4px rgba(0, 0, 0, 0.1)");
//   }
//   return { fetchThemeData, resetThemeToOriginal };
// }

// export default themeChanger;
