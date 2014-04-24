//:include tagsdk-current.js
var version = "";
var classPath = "chango.optimizationpixelv2productpage" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Optimization Pixel  [v2] - Product Page",
		async: true,
		description: "Chango's optimization pixel is a site-wide data gathering tool used to improve retargeting services. It should fire on every page.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Chango.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "ID",
			description: "",
			token: "ID",
			uv: ""
		}, {
			name: "PUID",
			description: "",
			token: "PUID",
			uv: ""
		}, {
			name: "PT Value",
			description: "Page Type",
			token: "PT_VALUE",
			uv: "universal_variable.page.type"
		}, {
			name: "NA Value",
			description: "Product name",
			token: "NA_VALUE",
			uv: "universal_variable.product.name"
		}, {
			name: "OP Value",
			description: "Original (non-sale) price",
			token: "OP_VALUE",
			uv: "universal_variable.product.unit_price"
		}, {
			name: "SP Value",
			description: "Sale price",
			token: "SP_VALUE",
			uv: "universal_variable.product.unit_sale_price"
		}, {
			name: "SKU Value",
			description: "Product SKU. A unique identifying number for a product",
			token: "SKU_VALUE",
			uv: "universal_variable.product.sku_code"
		}, {
			name: "PC Value",
			description: "Product category",
			token: "PC_VALUE",
			uv: "universal_variable.product.category"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/


		var __cho__ = {
			"data": {
				"pt": "" + this.valueForToken("PT_VALUE") + "",
				"crt": "",
				"na": "" + this.valueForToken("NA_VALUE") + "",
				"op": "" + this.valueForToken("OP_VALUE") + "",
				"sp": "" + this.valueForToken("SP_VALUE") + "",
				"sku": "" + this.valueForToken("SKU_VALUE") + "",
				"pc": "" + this.valueForToken("PC_VALUE") + ""
			},
			"pid": this.valueForToken("ID"),
			"puid2": "" + this.valueForToken("PUID") + ""
		};
		(function() {
			var c = document.createElement('script');
			c.type = 'text/javascript';
			c.async = true;
			c.src = document.location.protocol + '//cc.chango.com/static/o.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(c, s);
		})();
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