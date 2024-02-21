import React from "react";
import Button from "./button";

export default {
    title: "Button",
    component: Button,
    args: {
        label: "Demo Button"
    }
};
 
const ButtonTemplate = args => <Button {...args} />;
 
const Standard = ButtonTemplate.bind({});
 
const Disabled = ButtonTemplate.bind({});
Disabled.args = {disabled: true, label: "Disabled Button"};
 
export {Standard, Disabled};