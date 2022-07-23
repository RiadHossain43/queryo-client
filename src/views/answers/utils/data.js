export let defaultEditorDataSet = {
  data: {
    type: "Answer",
    title: "", // allow max 170 chars
    body: "",
  },
};
export let prePopulateEditorDataSet = (dataSet) => ({
  data: {
    type: "Answer",
    title: dataSet?.title,
    body: dataSet?.body,
  },
});
