WorkCenter = new Mongo.Collection("workCenter");
Worker = new Mongo.Collection("worker");
ScrapType = new Mongo.Collection("scrapType");

WorkCenter.attachSchema(new SimpleSchema({
	label: {
		type: String,
		label: "Enter Work center name",
		max: 10
	},
	value: {
		type: String,
		label: "Enter Work center number",
		max: 10
	}
}));