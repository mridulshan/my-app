import type { SharedElementsComponentConfig } from "react-navigation-shared-element";


export const getDetailSharedElements: SharedElementsComponentConfig = (
  route,
  otherRoute,
  showing
) => {
  const item = route.params.item;
  console.log(route.params, 'mridul');
  
  return [
    { id: `item.${item.id}.image`, animation: "fade", debug:true },
    { id: `item.${item.id}.photo` },
    { id: `item.${item.id}.name` },
    { id: `${item.id}.logo`, animation: "fade" },
    { id: `${item.id}.gradient`, animation: "fade" },
    { id: `${item.id}.title`, animation: "fade" },
    { id: `${item.id}.description`, animation: "fade" },
    { id: "close", animation: "fade" },
  ];
};
