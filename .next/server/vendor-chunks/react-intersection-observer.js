"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-intersection-observer";
exports.ids = ["vendor-chunks/react-intersection-observer"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-intersection-observer/index.mjs":
/*!************************************************************!*\
  !*** ./node_modules/react-intersection-observer/index.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InView: () => (/* binding */ InView),\n/* harmony export */   defaultFallbackInView: () => (/* binding */ defaultFallbackInView),\n/* harmony export */   observe: () => (/* binding */ observe),\n/* harmony export */   useInView: () => (/* binding */ useInView)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\"use client\";\nvar __defProp = Object.defineProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\n\n// src/InView.tsx\n\n\n// src/observe.ts\nvar observerMap = /* @__PURE__ */ new Map();\nvar RootIds = /* @__PURE__ */ new WeakMap();\nvar rootId = 0;\nvar unsupportedValue = void 0;\nfunction defaultFallbackInView(inView) {\n  unsupportedValue = inView;\n}\nfunction getRootId(root) {\n  if (!root)\n    return \"0\";\n  if (RootIds.has(root))\n    return RootIds.get(root);\n  rootId += 1;\n  RootIds.set(root, rootId.toString());\n  return RootIds.get(root);\n}\nfunction optionsToId(options) {\n  return Object.keys(options).sort().filter(\n    (key) => options[key] !== void 0\n  ).map((key) => {\n    return `${key}_${key === \"root\" ? getRootId(options.root) : options[key]}`;\n  }).toString();\n}\nfunction createObserver(options) {\n  let id = optionsToId(options);\n  let instance = observerMap.get(id);\n  if (!instance) {\n    const elements = /* @__PURE__ */ new Map();\n    let thresholds;\n    const observer = new IntersectionObserver((entries) => {\n      entries.forEach((entry) => {\n        var _a;\n        const inView = entry.isIntersecting && thresholds.some((threshold) => entry.intersectionRatio >= threshold);\n        if (options.trackVisibility && typeof entry.isVisible === \"undefined\") {\n          entry.isVisible = inView;\n        }\n        (_a = elements.get(entry.target)) == null ? void 0 : _a.forEach((callback) => {\n          callback(inView, entry);\n        });\n      });\n    }, options);\n    thresholds = observer.thresholds || (Array.isArray(options.threshold) ? options.threshold : [options.threshold || 0]);\n    instance = {\n      id,\n      observer,\n      elements\n    };\n    observerMap.set(id, instance);\n  }\n  return instance;\n}\nfunction observe(element, callback, options = {}, fallbackInView = unsupportedValue) {\n  if (typeof window.IntersectionObserver === \"undefined\" && fallbackInView !== void 0) {\n    const bounds = element.getBoundingClientRect();\n    callback(fallbackInView, {\n      isIntersecting: fallbackInView,\n      target: element,\n      intersectionRatio: typeof options.threshold === \"number\" ? options.threshold : 0,\n      time: 0,\n      boundingClientRect: bounds,\n      intersectionRect: bounds,\n      rootBounds: bounds\n    });\n    return () => {\n    };\n  }\n  const { id, observer, elements } = createObserver(options);\n  let callbacks = elements.get(element) || [];\n  if (!elements.has(element)) {\n    elements.set(element, callbacks);\n  }\n  callbacks.push(callback);\n  observer.observe(element);\n  return function unobserve() {\n    callbacks.splice(callbacks.indexOf(callback), 1);\n    if (callbacks.length === 0) {\n      elements.delete(element);\n      observer.unobserve(element);\n    }\n    if (elements.size === 0) {\n      observer.disconnect();\n      observerMap.delete(id);\n    }\n  };\n}\n\n// src/InView.tsx\nfunction isPlainChildren(props) {\n  return typeof props.children !== \"function\";\n}\nvar InView = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n    __publicField(this, \"node\", null);\n    __publicField(this, \"_unobserveCb\", null);\n    __publicField(this, \"handleNode\", (node) => {\n      if (this.node) {\n        this.unobserve();\n        if (!node && !this.props.triggerOnce && !this.props.skip) {\n          this.setState({ inView: !!this.props.initialInView, entry: void 0 });\n        }\n      }\n      this.node = node ? node : null;\n      this.observeNode();\n    });\n    __publicField(this, \"handleChange\", (inView, entry) => {\n      if (inView && this.props.triggerOnce) {\n        this.unobserve();\n      }\n      if (!isPlainChildren(this.props)) {\n        this.setState({ inView, entry });\n      }\n      if (this.props.onChange) {\n        this.props.onChange(inView, entry);\n      }\n    });\n    this.state = {\n      inView: !!props.initialInView,\n      entry: void 0\n    };\n  }\n  componentDidMount() {\n    this.unobserve();\n    this.observeNode();\n  }\n  componentDidUpdate(prevProps) {\n    if (prevProps.rootMargin !== this.props.rootMargin || prevProps.root !== this.props.root || prevProps.threshold !== this.props.threshold || prevProps.skip !== this.props.skip || prevProps.trackVisibility !== this.props.trackVisibility || prevProps.delay !== this.props.delay) {\n      this.unobserve();\n      this.observeNode();\n    }\n  }\n  componentWillUnmount() {\n    this.unobserve();\n  }\n  observeNode() {\n    if (!this.node || this.props.skip)\n      return;\n    const {\n      threshold,\n      root,\n      rootMargin,\n      trackVisibility,\n      delay,\n      fallbackInView\n    } = this.props;\n    this._unobserveCb = observe(\n      this.node,\n      this.handleChange,\n      {\n        threshold,\n        root,\n        rootMargin,\n        // @ts-ignore\n        trackVisibility,\n        // @ts-ignore\n        delay\n      },\n      fallbackInView\n    );\n  }\n  unobserve() {\n    if (this._unobserveCb) {\n      this._unobserveCb();\n      this._unobserveCb = null;\n    }\n  }\n  render() {\n    const { children } = this.props;\n    if (typeof children === \"function\") {\n      const { inView, entry } = this.state;\n      return children({ inView, entry, ref: this.handleNode });\n    }\n    const {\n      as,\n      triggerOnce,\n      threshold,\n      root,\n      rootMargin,\n      onChange,\n      skip,\n      trackVisibility,\n      delay,\n      initialInView,\n      fallbackInView,\n      ...props\n    } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(\n      as || \"div\",\n      { ref: this.handleNode, ...props },\n      children\n    );\n  }\n};\n\n// src/useInView.tsx\n\nfunction useInView({\n  threshold,\n  delay,\n  trackVisibility,\n  rootMargin,\n  root,\n  triggerOnce,\n  skip,\n  initialInView,\n  fallbackInView,\n  onChange\n} = {}) {\n  var _a;\n  const [ref, setRef] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);\n  const callback = react__WEBPACK_IMPORTED_MODULE_0__.useRef();\n  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({\n    inView: !!initialInView,\n    entry: void 0\n  });\n  callback.current = onChange;\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(\n    () => {\n      if (skip || !ref)\n        return;\n      let unobserve;\n      unobserve = observe(\n        ref,\n        (inView, entry) => {\n          setState({\n            inView,\n            entry\n          });\n          if (callback.current)\n            callback.current(inView, entry);\n          if (entry.isIntersecting && triggerOnce && unobserve) {\n            unobserve();\n            unobserve = void 0;\n          }\n        },\n        {\n          root,\n          rootMargin,\n          threshold,\n          // @ts-ignore\n          trackVisibility,\n          // @ts-ignore\n          delay\n        },\n        fallbackInView\n      );\n      return () => {\n        if (unobserve) {\n          unobserve();\n        }\n      };\n    },\n    // We break the rule here, because we aren't including the actual `threshold` variable\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    [\n      // If the threshold is an array, convert it to a string, so it won't change between renders.\n      // eslint-disable-next-line react-hooks/exhaustive-deps\n      Array.isArray(threshold) ? threshold.toString() : threshold,\n      ref,\n      root,\n      rootMargin,\n      triggerOnce,\n      skip,\n      trackVisibility,\n      fallbackInView,\n      delay\n    ]\n  );\n  const entryTarget = (_a = state.entry) == null ? void 0 : _a.target;\n  const previousEntryTarget = react__WEBPACK_IMPORTED_MODULE_0__.useRef();\n  if (!ref && entryTarget && !triggerOnce && !skip && previousEntryTarget.current !== entryTarget) {\n    previousEntryTarget.current = entryTarget;\n    setState({\n      inView: !!initialInView,\n      entry: void 0\n    });\n  }\n  const result = [setRef, state.inView, state.entry];\n  result.ref = result[0];\n  result.inView = result[1];\n  result.entry = result[2];\n  return result;\n}\n\n//# sourceMappingURL=index.mjs.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyL2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQSw4RUFBOEUsNkRBQTZEO0FBQzNJO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQytCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLElBQUksR0FBRyx3REFBd0Q7QUFDN0UsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBVSx5QkFBeUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDRDQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbURBQW1EO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0EsY0FBYyxnQkFBZ0I7QUFDOUIsd0JBQXdCLHFDQUFxQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLFdBQVcsZ0RBQW1CO0FBQzlCO0FBQ0EsUUFBUSxnQ0FBZ0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSTtBQUNOO0FBQ0Esd0JBQXdCLDJDQUFlO0FBQ3ZDLG1CQUFtQix5Q0FBYTtBQUNoQyw0QkFBNEIsMkNBQWU7QUFDM0M7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUUsNENBQWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIseUNBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1FO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyL2luZGV4Lm1qcz8zNDUxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2RlZk5vcm1hbFByb3AgPSAob2JqLCBrZXksIHZhbHVlKSA9PiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbnZhciBfX3B1YmxpY0ZpZWxkID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ge1xuICBfX2RlZk5vcm1hbFByb3Aob2JqLCB0eXBlb2Yga2V5ICE9PSBcInN5bWJvbFwiID8ga2V5ICsgXCJcIiA6IGtleSwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vLyBzcmMvSW5WaWV3LnRzeFxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8vIHNyYy9vYnNlcnZlLnRzXG52YXIgb2JzZXJ2ZXJNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIFJvb3RJZHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciByb290SWQgPSAwO1xudmFyIHVuc3VwcG9ydGVkVmFsdWUgPSB2b2lkIDA7XG5mdW5jdGlvbiBkZWZhdWx0RmFsbGJhY2tJblZpZXcoaW5WaWV3KSB7XG4gIHVuc3VwcG9ydGVkVmFsdWUgPSBpblZpZXc7XG59XG5mdW5jdGlvbiBnZXRSb290SWQocm9vdCkge1xuICBpZiAoIXJvb3QpXG4gICAgcmV0dXJuIFwiMFwiO1xuICBpZiAoUm9vdElkcy5oYXMocm9vdCkpXG4gICAgcmV0dXJuIFJvb3RJZHMuZ2V0KHJvb3QpO1xuICByb290SWQgKz0gMTtcbiAgUm9vdElkcy5zZXQocm9vdCwgcm9vdElkLnRvU3RyaW5nKCkpO1xuICByZXR1cm4gUm9vdElkcy5nZXQocm9vdCk7XG59XG5mdW5jdGlvbiBvcHRpb25zVG9JZChvcHRpb25zKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvcHRpb25zKS5zb3J0KCkuZmlsdGVyKFxuICAgIChrZXkpID0+IG9wdGlvbnNba2V5XSAhPT0gdm9pZCAwXG4gICkubWFwKChrZXkpID0+IHtcbiAgICByZXR1cm4gYCR7a2V5fV8ke2tleSA9PT0gXCJyb290XCIgPyBnZXRSb290SWQob3B0aW9ucy5yb290KSA6IG9wdGlvbnNba2V5XX1gO1xuICB9KS50b1N0cmluZygpO1xufVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICBsZXQgaWQgPSBvcHRpb25zVG9JZChvcHRpb25zKTtcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJNYXAuZ2V0KGlkKTtcbiAgaWYgKCFpbnN0YW5jZSkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgICBsZXQgdGhyZXNob2xkcztcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGluVmlldyA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nICYmIHRocmVzaG9sZHMuc29tZSgodGhyZXNob2xkKSA9PiBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+PSB0aHJlc2hvbGQpO1xuICAgICAgICBpZiAob3B0aW9ucy50cmFja1Zpc2liaWxpdHkgJiYgdHlwZW9mIGVudHJ5LmlzVmlzaWJsZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGVudHJ5LmlzVmlzaWJsZSA9IGluVmlldztcbiAgICAgICAgfVxuICAgICAgICAoX2EgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgY2FsbGJhY2soaW5WaWV3LCBlbnRyeSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgdGhyZXNob2xkcyA9IG9ic2VydmVyLnRocmVzaG9sZHMgfHwgKEFycmF5LmlzQXJyYXkob3B0aW9ucy50aHJlc2hvbGQpID8gb3B0aW9ucy50aHJlc2hvbGQgOiBbb3B0aW9ucy50aHJlc2hvbGQgfHwgMF0pO1xuICAgIGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzXG4gICAgfTtcbiAgICBvYnNlcnZlck1hcC5zZXQoaWQsIGluc3RhbmNlKTtcbiAgfVxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zID0ge30sIGZhbGxiYWNrSW5WaWV3ID0gdW5zdXBwb3J0ZWRWYWx1ZSkge1xuICBpZiAodHlwZW9mIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA9PT0gXCJ1bmRlZmluZWRcIiAmJiBmYWxsYmFja0luVmlldyAhPT0gdm9pZCAwKSB7XG4gICAgY29uc3QgYm91bmRzID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjYWxsYmFjayhmYWxsYmFja0luVmlldywge1xuICAgICAgaXNJbnRlcnNlY3Rpbmc6IGZhbGxiYWNrSW5WaWV3LFxuICAgICAgdGFyZ2V0OiBlbGVtZW50LFxuICAgICAgaW50ZXJzZWN0aW9uUmF0aW86IHR5cGVvZiBvcHRpb25zLnRocmVzaG9sZCA9PT0gXCJudW1iZXJcIiA/IG9wdGlvbnMudGhyZXNob2xkIDogMCxcbiAgICAgIHRpbWU6IDAsXG4gICAgICBib3VuZGluZ0NsaWVudFJlY3Q6IGJvdW5kcyxcbiAgICAgIGludGVyc2VjdGlvblJlY3Q6IGJvdW5kcyxcbiAgICAgIHJvb3RCb3VuZHM6IGJvdW5kc1xuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgfTtcbiAgfVxuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICBsZXQgY2FsbGJhY2tzID0gZWxlbWVudHMuZ2V0KGVsZW1lbnQpIHx8IFtdO1xuICBpZiAoIWVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFja3MpO1xuICB9XG4gIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICBjYWxsYmFja3Muc3BsaWNlKGNhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKSwgMSk7XG4gICAgaWYgKGNhbGxiYWNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIG9ic2VydmVyTWFwLmRlbGV0ZShpZCk7XG4gICAgfVxuICB9O1xufVxuXG4vLyBzcmMvSW5WaWV3LnRzeFxuZnVuY3Rpb24gaXNQbGFpbkNoaWxkcmVuKHByb3BzKSB7XG4gIHJldHVybiB0eXBlb2YgcHJvcHMuY2hpbGRyZW4gIT09IFwiZnVuY3Rpb25cIjtcbn1cbnZhciBJblZpZXcgPSBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJub2RlXCIsIG51bGwpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJfdW5vYnNlcnZlQ2JcIiwgbnVsbCk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImhhbmRsZU5vZGVcIiwgKG5vZGUpID0+IHtcbiAgICAgIGlmICh0aGlzLm5vZGUpIHtcbiAgICAgICAgdGhpcy51bm9ic2VydmUoKTtcbiAgICAgICAgaWYgKCFub2RlICYmICF0aGlzLnByb3BzLnRyaWdnZXJPbmNlICYmICF0aGlzLnByb3BzLnNraXApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5WaWV3OiAhIXRoaXMucHJvcHMuaW5pdGlhbEluVmlldywgZW50cnk6IHZvaWQgMCB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5ub2RlID0gbm9kZSA/IG5vZGUgOiBudWxsO1xuICAgICAgdGhpcy5vYnNlcnZlTm9kZSgpO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJoYW5kbGVDaGFuZ2VcIiwgKGluVmlldywgZW50cnkpID0+IHtcbiAgICAgIGlmIChpblZpZXcgJiYgdGhpcy5wcm9wcy50cmlnZ2VyT25jZSkge1xuICAgICAgICB0aGlzLnVub2JzZXJ2ZSgpO1xuICAgICAgfVxuICAgICAgaWYgKCFpc1BsYWluQ2hpbGRyZW4odGhpcy5wcm9wcykpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGluVmlldywgZW50cnkgfSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGluVmlldywgZW50cnkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpblZpZXc6ICEhcHJvcHMuaW5pdGlhbEluVmlldyxcbiAgICAgIGVudHJ5OiB2b2lkIDBcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudW5vYnNlcnZlKCk7XG4gICAgdGhpcy5vYnNlcnZlTm9kZSgpO1xuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAocHJldlByb3BzLnJvb3RNYXJnaW4gIT09IHRoaXMucHJvcHMucm9vdE1hcmdpbiB8fCBwcmV2UHJvcHMucm9vdCAhPT0gdGhpcy5wcm9wcy5yb290IHx8IHByZXZQcm9wcy50aHJlc2hvbGQgIT09IHRoaXMucHJvcHMudGhyZXNob2xkIHx8IHByZXZQcm9wcy5za2lwICE9PSB0aGlzLnByb3BzLnNraXAgfHwgcHJldlByb3BzLnRyYWNrVmlzaWJpbGl0eSAhPT0gdGhpcy5wcm9wcy50cmFja1Zpc2liaWxpdHkgfHwgcHJldlByb3BzLmRlbGF5ICE9PSB0aGlzLnByb3BzLmRlbGF5KSB7XG4gICAgICB0aGlzLnVub2JzZXJ2ZSgpO1xuICAgICAgdGhpcy5vYnNlcnZlTm9kZSgpO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVub2JzZXJ2ZSgpO1xuICB9XG4gIG9ic2VydmVOb2RlKCkge1xuICAgIGlmICghdGhpcy5ub2RlIHx8IHRoaXMucHJvcHMuc2tpcClcbiAgICAgIHJldHVybjtcbiAgICBjb25zdCB7XG4gICAgICB0aHJlc2hvbGQsXG4gICAgICByb290LFxuICAgICAgcm9vdE1hcmdpbixcbiAgICAgIHRyYWNrVmlzaWJpbGl0eSxcbiAgICAgIGRlbGF5LFxuICAgICAgZmFsbGJhY2tJblZpZXdcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLl91bm9ic2VydmVDYiA9IG9ic2VydmUoXG4gICAgICB0aGlzLm5vZGUsXG4gICAgICB0aGlzLmhhbmRsZUNoYW5nZSxcbiAgICAgIHtcbiAgICAgICAgdGhyZXNob2xkLFxuICAgICAgICByb290LFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRyYWNrVmlzaWJpbGl0eSxcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBkZWxheVxuICAgICAgfSxcbiAgICAgIGZhbGxiYWNrSW5WaWV3XG4gICAgKTtcbiAgfVxuICB1bm9ic2VydmUoKSB7XG4gICAgaWYgKHRoaXMuX3Vub2JzZXJ2ZUNiKSB7XG4gICAgICB0aGlzLl91bm9ic2VydmVDYigpO1xuICAgICAgdGhpcy5fdW5vYnNlcnZlQ2IgPSBudWxsO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGNvbnN0IHsgaW5WaWV3LCBlbnRyeSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIHJldHVybiBjaGlsZHJlbih7IGluVmlldywgZW50cnksIHJlZjogdGhpcy5oYW5kbGVOb2RlIH0pO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBhcyxcbiAgICAgIHRyaWdnZXJPbmNlLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgcm9vdCxcbiAgICAgIHJvb3RNYXJnaW4sXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIHNraXAsXG4gICAgICB0cmFja1Zpc2liaWxpdHksXG4gICAgICBkZWxheSxcbiAgICAgIGluaXRpYWxJblZpZXcsXG4gICAgICBmYWxsYmFja0luVmlldyxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBhcyB8fCBcImRpdlwiLFxuICAgICAgeyByZWY6IHRoaXMuaGFuZGxlTm9kZSwgLi4ucHJvcHMgfSxcbiAgICAgIGNoaWxkcmVuXG4gICAgKTtcbiAgfVxufTtcblxuLy8gc3JjL3VzZUluVmlldy50c3hcbmltcG9ydCAqIGFzIFJlYWN0MiBmcm9tIFwicmVhY3RcIjtcbmZ1bmN0aW9uIHVzZUluVmlldyh7XG4gIHRocmVzaG9sZCxcbiAgZGVsYXksXG4gIHRyYWNrVmlzaWJpbGl0eSxcbiAgcm9vdE1hcmdpbixcbiAgcm9vdCxcbiAgdHJpZ2dlck9uY2UsXG4gIHNraXAsXG4gIGluaXRpYWxJblZpZXcsXG4gIGZhbGxiYWNrSW5WaWV3LFxuICBvbkNoYW5nZVxufSA9IHt9KSB7XG4gIHZhciBfYTtcbiAgY29uc3QgW3JlZiwgc2V0UmVmXSA9IFJlYWN0Mi51c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgY2FsbGJhY2sgPSBSZWFjdDIudXNlUmVmKCk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QyLnVzZVN0YXRlKHtcbiAgICBpblZpZXc6ICEhaW5pdGlhbEluVmlldyxcbiAgICBlbnRyeTogdm9pZCAwXG4gIH0pO1xuICBjYWxsYmFjay5jdXJyZW50ID0gb25DaGFuZ2U7XG4gIFJlYWN0Mi51c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgaWYgKHNraXAgfHwgIXJlZilcbiAgICAgICAgcmV0dXJuO1xuICAgICAgbGV0IHVub2JzZXJ2ZTtcbiAgICAgIHVub2JzZXJ2ZSA9IG9ic2VydmUoXG4gICAgICAgIHJlZixcbiAgICAgICAgKGluVmlldywgZW50cnkpID0+IHtcbiAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICBpblZpZXcsXG4gICAgICAgICAgICBlbnRyeVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChjYWxsYmFjay5jdXJyZW50KVxuICAgICAgICAgICAgY2FsbGJhY2suY3VycmVudChpblZpZXcsIGVudHJ5KTtcbiAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgdHJpZ2dlck9uY2UgJiYgdW5vYnNlcnZlKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZSA9IHZvaWQgMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICByb290LFxuICAgICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgICAgdGhyZXNob2xkLFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICB0cmFja1Zpc2liaWxpdHksXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIGRlbGF5XG4gICAgICAgIH0sXG4gICAgICAgIGZhbGxiYWNrSW5WaWV3XG4gICAgICApO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKHVub2JzZXJ2ZSkge1xuICAgICAgICAgIHVub2JzZXJ2ZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG4gICAgLy8gV2UgYnJlYWsgdGhlIHJ1bGUgaGVyZSwgYmVjYXVzZSB3ZSBhcmVuJ3QgaW5jbHVkaW5nIHRoZSBhY3R1YWwgYHRocmVzaG9sZGAgdmFyaWFibGVcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgW1xuICAgICAgLy8gSWYgdGhlIHRocmVzaG9sZCBpcyBhbiBhcnJheSwgY29udmVydCBpdCB0byBhIHN0cmluZywgc28gaXQgd29uJ3QgY2hhbmdlIGJldHdlZW4gcmVuZGVycy5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICAgIEFycmF5LmlzQXJyYXkodGhyZXNob2xkKSA/IHRocmVzaG9sZC50b1N0cmluZygpIDogdGhyZXNob2xkLFxuICAgICAgcmVmLFxuICAgICAgcm9vdCxcbiAgICAgIHJvb3RNYXJnaW4sXG4gICAgICB0cmlnZ2VyT25jZSxcbiAgICAgIHNraXAsXG4gICAgICB0cmFja1Zpc2liaWxpdHksXG4gICAgICBmYWxsYmFja0luVmlldyxcbiAgICAgIGRlbGF5XG4gICAgXVxuICApO1xuICBjb25zdCBlbnRyeVRhcmdldCA9IChfYSA9IHN0YXRlLmVudHJ5KSA9PSBudWxsID8gdm9pZCAwIDogX2EudGFyZ2V0O1xuICBjb25zdCBwcmV2aW91c0VudHJ5VGFyZ2V0ID0gUmVhY3QyLnVzZVJlZigpO1xuICBpZiAoIXJlZiAmJiBlbnRyeVRhcmdldCAmJiAhdHJpZ2dlck9uY2UgJiYgIXNraXAgJiYgcHJldmlvdXNFbnRyeVRhcmdldC5jdXJyZW50ICE9PSBlbnRyeVRhcmdldCkge1xuICAgIHByZXZpb3VzRW50cnlUYXJnZXQuY3VycmVudCA9IGVudHJ5VGFyZ2V0O1xuICAgIHNldFN0YXRlKHtcbiAgICAgIGluVmlldzogISFpbml0aWFsSW5WaWV3LFxuICAgICAgZW50cnk6IHZvaWQgMFxuICAgIH0pO1xuICB9XG4gIGNvbnN0IHJlc3VsdCA9IFtzZXRSZWYsIHN0YXRlLmluVmlldywgc3RhdGUuZW50cnldO1xuICByZXN1bHQucmVmID0gcmVzdWx0WzBdO1xuICByZXN1bHQuaW5WaWV3ID0gcmVzdWx0WzFdO1xuICByZXN1bHQuZW50cnkgPSByZXN1bHRbMl07XG4gIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQge1xuICBJblZpZXcsXG4gIGRlZmF1bHRGYWxsYmFja0luVmlldyxcbiAgb2JzZXJ2ZSxcbiAgdXNlSW5WaWV3XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-intersection-observer/index.mjs\n");

/***/ })

};
;