import {
  getControllerData,
  ControllerData,
  ControllerDataType,
  ControllerDataItems,
} from "api";
import { useEffect, useState } from "react";
import randomstring from "randomstring";

export interface AddController {
  title: string;
  type: ControllerDataType;
  items: ControllerDataItems[];
}
export const useController = (serverUrl: string) => {
  const [controllerData, setControllerData] = useState<ControllerData[]>([
    {
      id: "controller1",
      type: "switch",
      title: "Switch Controller",
      items: [
        { id: "switch-1", type: "switch", label: "name 1", value: false },
        { id: "switch-2", type: "switch", label: "name 2", value: true },
        { id: "switch-3", type: "switch", label: "name 3", value: false },
      ],
    },
    {
      id: "controller2",
      type: "multiple",
      title: "Multiple Controller",
      items: [
        { type: "switch", id: "multi-1", label: "name 1", value: false },
        { type: "input", id: "multi-2", label: "name 2", value: "multiple" },
        { type: "checkbox", id: "multi-3", label: "name 3", value: true },
        { type: "checkbox", id: "multi-4", label: "name 4", value: false },
      ],
    },
    {
      id: "jhYkvDew5Y9Okx85x9TGQsqaAvG8s2eW",
      type: "input",
      title: "Input Controller",
      items: [
        {
          id: "uTn3QbAMgl36E6Lvf2JxchmOo9pgkuYp",
          label: "입력형 1번",
          type: "input",
          value: "",
        },
        {
          id: "h4ufjKwdol3BaaSjMqaunfwiZoXqAtds",
          label: "입력형 2번",
          type: "input",
          value: "",
        },
        {
          id: "1jixYfrPxbAwGiqxDdBI5SRsmv1hOWa8",
          label: "입력형 3번",
          type: "input",
          value: "",
        },
      ],
    },
  ]);

  const addController = ({ title, type, items }: AddController): boolean => {
    if (!title) {
      alert("타이틀을 입력해주세요.");
      return false;
    }
    if (!items.length) {
      alert("아이템이 없습니다.");
      return false;
    }

    const data: ControllerData = {
      id: randomstring.generate(),
      type,
      title,
      items,
    };
    setControllerData((prevState) => [...prevState, data]);
    return true;
  };

  useEffect(() => {
    const getController = async () => {
      try {
        const res = await getControllerData(serverUrl);
        setControllerData(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getController();
  }, []);

  return {
    controllerData,
    addController,
  };
};
