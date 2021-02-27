import {
  putController,
  getController,
  ControllerData,
  ControllerDataType,
  ControllerDataItems,
  postController,
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
export interface ChangeControllerRadioItem {
  controllerIndex: number;
  value: string | number;
}

export const useController = (serverUrl: string) => {
  const [controllerData, setControllerData] = useState<ControllerData[]>([
    {
      id: "jhYkvDew5Y9Okx85x9TGQsqaAvG8s2eW",
      type: "input",
      title: "입력형",
      selectedId: null,
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
      id: "xiecHphdmUaIYz0IwSE8pQicXfwW6nPu",
      type: "multiple",
      title: "복합형",
      selectedId: null,
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

  const addController = async ({ title, type, items }: AddController) => {
    if (!title) {
      alert("타이틀을 입력해주세요.");
      return false;
    }
    if (!items.length) {
      alert("아이템이 없습니다.");
      return false;
    }

    try {
      const data: ControllerData = {
        id: randomstring.generate(),
        type,
        title,
        selectedId: type === "radio" ? items[0].id : null,
        items,
      };
      setControllerData((prevState) => [...prevState, data]);

      await postController(serverUrl, data);

      return true;
    } catch (e) {
      alert(e);
      return true;
    }
  };

  const changeControllerRadioItem = async ({
    controllerIndex,
    value,
  }: ChangeControllerRadioItem) => {
    const newData = controllerData.slice();
    newData[controllerIndex].selectedId = value;

    setControllerData(newData);
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
      selectedId: target.selectedId,
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
    changeControllerRadioItem,
    updateController,
  };
};
