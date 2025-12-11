export class UIFunctions {
  static async registerTagsColumn() {
    await Zotero.ItemTreeManager.registerColumns({
      pluginID: addon.data.config.addonID,
      dataKey: "tagsColumn",
      label: "Tags",
      dataProvider: (item: Zotero.Item) => {
        return item.getTags().map(t => t.tag).join(", ");
      },
      renderCell(index, data, column, isFirstColumn, doc) {
        const span = doc.createElement("span");
        span.className = `cell ${column.className}`;
        span.innerText = data;
        return span;
      },
    });
  }
}
