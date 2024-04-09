import { Superstore, DHL } from "./Themes"

export const settings = {
  ai_chat: true,
  custom_metrics: true,
  themes: [
    {
      label: "DHL",
      name: "dhl",
      component: DHL,
      type: "default",
      logo: "dhl.png",
      styles: "",
      project: {
        name: "superstore_embedded",
        workbooks: [],
        data_sources: []
      }
    }
  ]
}
