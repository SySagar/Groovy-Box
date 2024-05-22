import InstallPage from '@components/InstallPage';
import Access from "@components/Access";

export default function Home() {
  return (
    <main>
      <div
            style={{
              display: "flex",
              minHeight: "90vh",
              background: "#fff",
            }}
          >
            <div
              className="inner-container"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p className="text-[#2A2C35] font-bold w-2/3 text-center text-5xl">
                  Beautifully crafted components for your next big front-end application.</p>
                <h3
                className="font-mdeium text-xl text-appTextSecondaryColor"
                  style={{
                    width: "50vw",
                    textAlign: "center",
                  }}
                >
                  The official React UI library built on top of Radix UI.
                </h3>

                <div
                  className="meta-container"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "50px",
                    gap: "2rem",
                  }}
                >
                  <div style={{position:'relative'}}>
                    <InstallPage />
                  </div>

                  <div>
                    <Access />
                  </div>
                </div>
              </div>
            </div>
          </div>
    </main>
  );
}
