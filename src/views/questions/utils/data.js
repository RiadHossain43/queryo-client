export let defaultEditorDataSet = {
  data: {
    type: "Question",
    title: "", // allow max 170 chars
    body: "",
  },
};
export let prePopulateEditorDataSet = (dataSet) => ({
  data: {
    type: "Question",
    title: dataSet?.title,
    body: dataSet?.body,
  },
});
