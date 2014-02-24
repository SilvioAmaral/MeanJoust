'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Tournament Schema
 */
var TournamentSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true
    },
    description: {
        type: String,
        default: '',
        trim: true
    },
    start_date: {
        type: Date,
        default: Date.now
    },
    end_date: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        trim: true
    },
    matches: [{
        date: {
            type: String,
            trim: true
        },
        location: [{
            type: String,
            trim: true
        }],
        competitors: [{
            type: String,
            trim: true
        }],
        result: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        status: {
            type: String,
            enum: ['Pending', 'In Game', 'Done', 'Cancelled']
        }
    }],
    competitors: [{
        type: Schema.ObjectId,
        ref: 'Competitor'
    }],
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

/**
 * Validations
 */
TournamentSchema.path('title').validate(function(title) {
    return title.length;
}, 'Title cannot be blank');

/**
 * Statics
 */
TournamentSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};

mongoose.model('Tournament', TournamentSchema);
