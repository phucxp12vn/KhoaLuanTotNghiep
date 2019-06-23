const toString = Object.prototype.toString;

export const isBoolean = boo => {
  return typeof boo == 'boolean' ? true : false;
};

export const isArray = val => {
  return toString.call(val) === '[object Array]';
};

export const isFormData = val => {
  return typeof FormData !== 'undefined' && val instanceof FormData;
};

export const isString = val => {
  return typeof val === 'string';
};

export const hasText = val => {
  return typeof val === 'string' && val.trim() != '';
};

export const emptyString = val => {
  return typeof val === 'string' && val.trim() == '';
};

export const isNumber = val => {
  return typeof val === 'number' && !Number.isNaN(val);
};

export const isUndefined = val => {
  return typeof val === 'undefined';
};

export const isObject = val => {
  return val !== null && typeof val === 'object';
};

export const isDate = val => {
  return toString.call(val) === '[object Date]';
};

export const isFile = val => {
  return toString.call(val) === '[object File]';
};

export const isBlob = val => {
  return toString.call(val) === '[object Blob]';
};

export const isFunction = val => {
  return toString.call(val) === '[object Function]';
};

export const isStream = val => {
  return isObject(val) && isFunction(val.pipe);
};

export const trim = str => {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
};
