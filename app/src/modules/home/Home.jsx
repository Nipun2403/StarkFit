import React from "react";
import Hero from "../../assets/Hero.png";
import Arrow from "../../assets/arrow.png";
import ActionButton from "../../shared/ActionButton";
import GetEmail from "../../shared/GetEmail";
import { motion } from "framer-motion";

function Home() {
  return (
    // Section
    <section className="my-24">
      {/* Parent Div */}
      <div>
        {/* Secondary Div */}
        <div className="flex">
          {/* Left Section */}
          <motion.div
            className="basis-4/5"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -200 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img
              src={Hero}
              className="w-full m-0 "
            />
          </motion.div>

          {/* Right Section */}
          <div className="">
            <div className="">
              <div>
                <p className="text-[6rem]">
                  If You Can't Fly{" "}
                  <span className="text-[8rem] font-bold font-poppins tracking-x underline underline-offset-8">
                    RUN
                  </span>
                </p>
              </div>
              <div className="my-10">
                <p className="text-xl text-gray-400">
                  Want your body to be healthy? Join our program with directions
                  according to your body's goals{" "}
                </p>
                <p className="text-xl text-gray-400"></p>
              </div>

              <div className="flex gap-32 my-12 py-4">
                <GetEmail
                  ButtonClass={""}
                  ButtonTitle={"Join Today"}
                />
              </div>
            </div>

            {/* Quick Info Section */}
            <div className="flex items-center justify-between my-16">
              <div className="">
                <p className="text-center text-xl font-bold text-primary-200">
                  80+
                </p>
                <p>Exercise Programs</p>
              </div>
              <div>
                <p className="text-center text-xl font-bold text-primary-200">
                  1280+
                </p>
                <p>Members</p>
              </div>
              <div>
                <p className="text-center text-xl font-bold text-primary-200">
                  120+
                </p>
                <p>Certified Trainers</p>
              </div>
            </div>
          </div>

          {/* Div Endings */}
        </div>
      </div>
    </section>
  );
}

export default Home;
