export let defaultEditorDataSet = {
  data: {
    title: "", // allow max 170 chars
    body: "", 
  },
};
export let prePopulateEditorDataSet = (dataSet) => ({
  data: {
    title: dataSet?.title,
    body: dataSet?.body,
  },
});
