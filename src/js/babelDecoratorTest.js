var _dec, _class, _descriptor, _descriptor2;

function _initializerDefineProperty(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer
      ? descriptor.initializer.call(context)
      : void 0,
  });
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _applyDecoratedDescriptor(
  target,
  property,
  decorators,
  descriptor,
  context
) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;
  if ("value" in desc || desc.initializer) {
    desc.writable = true;
  }
  desc = decorators
    .slice()
    .reverse()
    .reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);
  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }
  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }
  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error(
    "Decorating class property failed. Please ensure that " +
      "proposal-class-properties is enabled and runs after the decorators transform."
  );
}

import { observable, computed } from "mobx";
let OrderLine =
  ((_dec = action.bound),
  ((_class = class OrderLine {
    constructor() {
      _initializerDefineProperty(this, "price", _descriptor, this);

      _initializerDefineProperty(this, "amount", _descriptor2, this);
    }

    get total() {
      return this.price * this.amount;
    }

    increment() {
      this.amount++; // 'this' 永远都是正确的
    }
  }),
  ((_descriptor = _applyDecoratedDescriptor(
    _class.prototype,
    "price",
    [observable],
    {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return 0;
      },
    }
  )),
  (_descriptor2 = _applyDecoratedDescriptor(
    _class.prototype,
    "amount",
    [observable],
    {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return 1;
      },
    }
  )),
  _applyDecoratedDescriptor(
    _class.prototype,
    "total",
    [computed],
    Object.getOwnPropertyDescriptor(_class.prototype, "total"),
    _class.prototype
  ),
  _applyDecoratedDescriptor(
    _class.prototype,
    "increment",
    [_dec],
    Object.getOwnPropertyDescriptor(_class.prototype, "increment"),
    _class.prototype
  )),
  _class));
