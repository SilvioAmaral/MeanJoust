'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Competitor Schema
 */
var CompetitorSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        default: '',
        trim: true
    },
    description: {
        type: String,
        default: '',
        trim: true
    },
    type: {
        type: String,
        enum: ['Team', 'Individual']
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

/**
 * Validations
 */
CompetitorSchema.path('name').validate(function(name) {
    return name.length;
}, 'Competitor name cannot be blank');
CompetitorSchema.path('email').validate(function(email) {
    return email.length;
}, 'Competitor e-mail cannot be blank');



/**
 * Statics
 */
CompetitorSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};

mongoose.model('Competitor', CompetitorSchema);
