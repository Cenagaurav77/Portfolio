import React from "react";
import Layout from "../Layout.js";

const workex = () => {
  return (
    <>
      <Layout>
        <section className="max-w-screen-xl mx-auto mt-20 flex">
          <header>
            <h2 className="text-4xl font-bold">
              Work <br />
              Experience
            </h2>
          </header>
          <div className="ml-40">
            <div className=" flex">
              {/* <div> */}
              <p className="w-2/4">August 2022 - July 2023</p>
              {/* </div> */}
              <div>
                <div>
                  <h3 className="text-2xl font-bold">
                    Tata Consultancy Services
                  </h3>
                </div>
                <div>
                  <h2 className="text-lg font-bold">System Administrator</h2>
                </div>
                <div>
                  <ul className="list-disc pl-8">
                    <li className="mb-4">
                      <p className="text-lg leading-relaxed">
                        Deployed 800 dedicated Virtual Desktops for Robotics
                        users on VMware Horizon, integrating vCenter server.
                        Aligned with Client's specs for seamless operation of
                        bots.
                      </p>
                    </li>
                    <li className="mb-4">
                      <p className="text-lg leading-relaxed">
                        Enhanced user experience with upgrades to VMware virtual
                        appliances (Horizon 8.4, vCenter 7.0.3 e, and Horizon
                        agent), reducing bandwidth usage by 30% and ensuring
                        security compliance for audits.
                      </p>
                    </li>
                    <li className="mb-4">
                      <p className="text-lg leading-relaxed">
                        Engaged stakeholders in an extensive VDI disaster
                        recovery drill, guaranteeing readiness of both primary
                        and DR infrastructures, minimizing downtime, and
                        ensuring uninterrupted operations.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" flex">
              {/* <div> */}
              <p className="w-2/4">July 2021 - July 2022</p>
              {/* </div> */}
              <div>
                <div>
                  <h3 className="text-2xl font-bold">
                    Tata Consultancy Services
                  </h3>
                </div>
                <div>
                  <h2 className="font-bold text-lg">
                    Assistant System Engineer Trainee
                  </h2>
                </div>
                <div>
                  <ul className="list-disc pl-8">
                    <li className="mb-4">
                      <p className="text-lg leading-relaxed">
                        Responsible for upkeep of 70+ production and DR servers,
                        hosting SQL, Workspace One, DEM, DHCP, and more.
                        Ensuring peak performance by promptly applying OS
                        patches.
                      </p>
                    </li>
                    <li className="mb-4">
                      <p className="text-lg leading-relaxed">
                        Led the administration of an intricate VDI setup,
                        overseeing 12 vCenter servers, 28 Horizon Connection
                        Servers, 12 App Volumes, and 4 DEMs. My proficiency
                        significantly improved its reliability and efficiency.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default workex;
