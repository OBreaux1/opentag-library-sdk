//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("mediaforge.product.Tag", {
	config: {
		/*DATA*/
		name: "Product",
		async: true,
		description: "To be placed on product display pages.",
		html: "<!--@SRC@--><script type=\"text/javascript\" src=\"//tags.mediaforge.com/js/${merchant_id}/?prodID=${product_id}\"></script>",
		imageUrl: ".",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "mediaFORGE Merchant ID",
			description: "The ID that relates you to mediaFORGE",
			token: "merchant_id",
			uv: ""
		},
		{
			name: "Product ID",
			description: "The product ID / SKU of the product on the current product display page",
			token: "product_id",
			uv: "universal_variable.product.sku_code"
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});