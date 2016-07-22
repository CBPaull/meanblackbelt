var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PollSchema = new mongoose.Schema({
	question: { type:String, min: [8, 'Question is too short']},
	opt1: { type:String, min: [3, 'Option is too short']},
	vc1: {type:Number, default:0},
	opt2: { type:String, min: [3, 'Option is too short']}, 
	vc2: {type:Number, default:0},
	opt3: { type:String, min: [3, 'Option is too short']},
	vc3: {type:Number, default:0},
	opt4: { type:String, min: [3, 'Option is too short']}, 
	vc4: {type:Number, default: 0},
	username: String
},
{
	timestamps: true
});
var UserSchema = new mongoose.Schema({
    firstname: String,
    questions: [{type: Schema.Types.ObjectId, ref:'Polldb'}]
});
mongoose.model('Polldb', PollSchema);
mongoose.model('Userdb', UserSchema);
// Validations
UserSchema.path('firstname').required(true, 'Last Name cannot be blank');
PollSchema.path('question').required(true, 'Question cannot be blank');
PollSchema.path('opt1').required(true, 'Option cannot be blank');
PollSchema.path('opt2').required(true, 'Option cannot be blank');
PollSchema.path('opt3').required(true, 'Option cannot be blank');
PollSchema.path('opt4').required(true, 'Option cannot be blank');

