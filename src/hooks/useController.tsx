import { getControllerData, ControllerData } from "api/getControllerData";
import { useEffect, useState } from "react";

export const useController = (serverUrl: string) => {
  const [controllerData, setControllerData] = useState<ControllerData[]>([
    {
      id: "controller1",
      type: "switch",
      title: "Switch Controller",
      items: [
        {
          id: "switch-1",
          type: "switch",
          label: "name 1",
          value: false,
        },
        {
          id: "switch-2",
          type: "switch",
          label: "name 2",
          value: true,
        },
        {
          id: "switch-3",
          type: "switch",
          label: "name 3",
          value: false,
        },
      ],
    },
    {
      id: "controller2",
      type: "multiple",
      title: "Multiple Controller",
      items: [
        {
          type: "switch",
          id: "multi-1",
          label: "name 1",
          value: false,
        },
        {
          type: "input",
          id: "multi-2",
          label: "name 2",
          value: "multiple",
        },
        {
          type: "checkbox",
          id: "multi-3",
          label: "name 3",
          value: true,
        },
        {
          type: "checkbox",
          id: "multi-4",
          label: "name 4",
          value: false,
        },
      ],
    },
  ]);

  useEffect(() => {
    const getController = async () => {
      try {
        const res = await getControllerData(serverUrl);
        setControllerData(res.data);
      } catch (e) {
        alert(e);
      }
    };
    getController();
  }, []);

  return {
    controllerData,
  };
};
