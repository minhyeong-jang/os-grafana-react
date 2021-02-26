import {
  putController,
  getController,
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
export interface ChangeControllerItem {
  controllerIndex: number;
  itemIndex: number;
  value: string | boolean;
}

export const useController = (serverUrl: string) => {
  const [controllerData, setControllerData] = useState<ControllerData[]>([
    {
      id: "jhYkvDew5Y9Okx85x9TGQsqaAvG8s2eW",
      type: "input",
      title: "입력형",
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
    {
      id: "qEAOThsVvFgwz1I8i7NyZ2JOM7feObS3",
      type: "radio",
      title: "선택형",
      items: [
        {
          id: "keb9ezHb5zmwbxzFqU7IRZvhWXvJlFFt",
          label: "선택 1",
          type: "radio",
          value: "",
        },
        {
          id: "tK9ccySfa0EIsom3KuE1mlLA3tsWHrGl",
          label: "선택 2",
          type: "radio",
          value: "",
        },
        {
          id: "0cbwS6ZpoCNKfKkV639IAJuntsvaoBQG",
          label: "선택 3",
          type: "radio",
          value: "",
        },
      ],
    },
    {
      id: "moOZSnQczM8DOef1IsPw0f8NcyVSP3S0",
      type: "switch",
      title: "스위치형",
      items: [
        {
          id: "z2RHTNiWeAJLs8Dfe1Ggql0Gw7nqpF0o",
          label: "스위치 1",
          type: "switch",
          value: false,
        },
        {
          id: "EjHxBvFWFj6MubDfSZT2dTIuz2x4Uhgy",
          label: "스위치 2",
          type: "switch",
          value: false,
        },
        {
          id: "Lw4vEvd7HT1kEl4fu4Z1RqQVzMTysMDG",
          label: "스위치 3",
          type: "switch",
          value: false,
        },
        {
          id: "oSJwKXYmD8cStY7X1treeSCqSqjRTcm0",
          label: "스위치 4",
          type: "switch",
          value: false,
        },
      ],
    },
    {
      id: "wGJAbbwkSd0K7qv5DWE0Y2ghhat9OHbJ",
      type: "checkbox",
      title: "체크박스형",
      items: [
        {
          id: "iCttd5ga1TOuLmdCgpCVt2K3eq5b9uc4",
          label: "체크박스 1",
          type: "checkbox",
          value: false,
        },
        {
          id: "H1O2Q8xZRkLj0U1xetMwKfOXUabYICAX",
          label: "체크박스 2",
          type: "checkbox",
          value: false,
        },
        {
          id: "hbnHovbmgkL6yalZJpaWLkc5jHpmScMs",
          label: "체크박스 3",
          type: "checkbox",
          value: false,
        },
        {
          id: "IJ7MIhwZKRJFHROfDwHIzr0Mw5obdPAT",
          label: "체크박스 44444",
          type: "checkbox",
          value: false,
        },
      ],
    },
    {
      id: "xiecHphdmUaIYz0IwSE8pQicXfwW6nPu",
      type: "multiple",
      title: "복합형",
      items: [
        {
          id: "Er6rriYbF6PQTrOepC9A3Wd84T66NQhU",
          label: "input 데이터",
          type: "input",
          value: "",
        },
        {
          id: "ITSlOR4aGwjZ7WCUcSWY865guiAwq4vJ",
          label: "Checkbox 데이터",
          type: "checkbox",
          value: false,
        },
        {
          id: "uz3J0i5xgRxjg6roW1Ed9DsbwVKW3osu",
          label: "스위치 1",
          type: "switch",
          value: false,
        },
        {
          id: "dyiUJCYd722gAxqribS7eeO9NTdh3UkJ",
          label: "스위치 2",
          type: "switch",
          value: false,
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

  const changeControllerItem = async ({
    controllerIndex,
    itemIndex,
    value,
  }: ChangeControllerItem) => {
    const newData = controllerData.slice();
    newData[controllerIndex].items[itemIndex].value = value;

    setControllerData(newData);
  };

  const updateController = async (index: number) => {
    const target = controllerData[index];
    await putController(serverUrl, {
      controllerId: target.id,
      items: target.items,
    });
  };

  useEffect(() => {
    const getControllerData = async () => {
      try {
        const res = await getController(serverUrl);
        setControllerData(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getControllerData();
  }, []);

  return {
    controllerData,
    addController,
    changeControllerItem,
    updateController,
  };
};
