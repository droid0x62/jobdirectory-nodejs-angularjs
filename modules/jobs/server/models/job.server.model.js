'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * JOb Schema
 */
var JobSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  content: {
    type: String,
    default: '',
    trim: true,
    required: 'company name cannot be blank'
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  description: {
    type: String,
    default: '',
    trim: true
  },
  requirements: {
    type: String,
    default: ''
  },
  hourly_wage: {
    type: String,
    default: '',
    trim: true
  },
  contact_email: {
    type: String,
    default: '' },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Job', JobSchema);
