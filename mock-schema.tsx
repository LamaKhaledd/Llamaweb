import { InputType } from "@/core/ui/models/input-base.type";

export const mockSchema = [
  {
    inputType: "text" as InputType,
    label: "First name",
    name: "firstName",
  },

  {
    inputType: "textarea" as InputType,
    label: "Bio",
    name: "bio",
  },

  {
    inputType: "password" as InputType,
    label: "Passowrd",
    name: "password",
  },

  {
    inputType: "checkbox" as InputType,
    label: "Terms and conditions",
    name: "terms",
    options: [
      {
        id: "terms",
        value: "terms",
        label: "I accept the terms and conditions",
      },
      {
        id: "privacy",
        value: "privacy",
        label: "I accept the privacy policy",
      },
    ],
  },

  {
    inputType: "radio" as InputType,
    label: "Gender",
    name: "gender",
    options: [
      {
        id: "male",
        value: "male",
        label: "Male",
      },
      {
        id: "female",
        value: "female",
        label: "Female",
      },
      {
        id: "other",
        value: "other",
        label: "Other",
      },
    ],
  },

  {
    inputType: "switch" as InputType,
    label: "Subscribe",
    name: "subscribe",
  },

  {
    inputType: "select" as InputType,
    label: "Favorite color",
    name: "color",
    options: [
      {
        id: "red",
        value: "red",
        label: "Red",
      },
      {
        id: "yellow",
        value: "yellow",
        label: "Yellow",
      },
      {
        id: "purple",
        value: "purple",
        label: "Purple",
      },
    ],
  },
];
