import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Container, Button, Input, Modal } from "@mantine/core";
import { TimeInput, DatePicker } from "@mantine/dates";

import webdev from "../assets/webdev.png";
import Header from "../components/Header";
const LandingPage = () => {
  const [createTeam, setCreateTeam] = useState(false);
  const [codeInput, setCodeInput] = useState(false);
  const [inputVal, setInputVal] = useState();

  const handleInput = (e) => {
    setInputVal(e.target.value);
    console.log(inputVal.length);
    if (inputVal.length >= 1) {
      setCodeInput(true);
    } else if (inputVal.length === 0) {
      setCodeInput(false);
    }
  };
  const { isAuth } = useContext(AuthContext);
  return (
    <Container size={1200} px={18}>
      <Header />
      <div className="h-[calc(100vh-10rem)] max-w-[1100px] mx-auto">
        <div className="flex items-center h-full w-full">
          <div className="flex justify-between items-center w-full">
            <section className="w-[50%]">
              <div className="pb-7">
                <h1 className="text-[35px]">
                  iDEVTask helps teams move work forward.
                </h1>
                <p className="text-[18px] text-gray-600">
                  Collaborate, manage projects, and reach new productivity
                  peaks. From high rises to the home office, the way your team
                  works is unique—accomplish it all with iDEVTask.
                </p>
              </div>
              <div className="flex items-center gap-3 pr-2">
                {isAuth ? (
                  <>
                    <Button
                      onClick={() => setCreateTeam(true)}
                      color="indigo"
                      size="md"
                    >
                      Create team
                    </Button>
                    <Input
                      onChange={handleInput}
                      value={inputVal}
                      variant="default"
                      size="md"
                      placeholder="Enter a code"
                    />
                    {codeInput ? (
                      <Button variant="subtle" size="md">
                        Join
                      </Button>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  <div className="flex items-center gap-3 pr-2">
                    <Input
                      variant="default"
                      size="md"
                      placeholder="Email"
                      className="w-full"
                    />
                    <Button color="indigo" size="md">
                      Sign up-it's free
                    </Button>
                  </div>
                )}
              </div>
            </section>
            <section>
              <img src={webdev} alt="" className="w-[500px]" />
            </section>
          </div>
        </div>
      </div>
      {/* Create Team Modal */}
      <Modal
        opened={createTeam}
        onClose={() => setCreateTeam(false)}
        withCloseButton={false}
      >
        <div className="p-3">
          <p className="text-gray-700">Create Team</p>
          <span className="text-[11px] text-gray-400 ">
            Please fill out the following input to get started!
          </span>

          <div className="py-2 space-y-3 pb-4">
            <div className="space-y-1">
              <p className="text-[10px] text-gray-400 uppercase font-semibold">
                Company Name
              </p>
              <Input placeholder="Company name" size="xs" />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-gray-400 uppercase font-semibold">
                Intern School / University
              </p>
              <Input placeholder="School / University" size="xs" />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-gray-400 uppercase font-semibold">
                Intern Department
              </p>
              <Input placeholder="Intern Department" size="xs" />
            </div>
            <div className="flex gap-3">
              <div className="space-y-1">
                <p className="text-[10px] text-gray-400 uppercase font-semibold">
                  OJT Required hours
                </p>
                <Input
                  type="number"
                  placeholder="Required max hours"
                  size="xs"
                />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-gray-400 uppercase font-semibold">
                  Start Date
                </p>
                <DatePicker
                  className="w-full"
                  size="xs"
                  placeholder="Pick date"
                />
              </div>
            </div>
          </div>

          <Button color="indigo" fullWidth>
            Create
          </Button>
        </div>
      </Modal>
    </Container>
  );
};

export default LandingPage;
