export let defaultEditorDataSet = {
  data: {
    body: "",
  },
};
export let prePopulateEditorDataSet = (dataSet) => ({
  data: {
    body: dataSet?.body,
  },
});
