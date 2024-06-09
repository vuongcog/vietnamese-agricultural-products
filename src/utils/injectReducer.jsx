import React, { useEffect } from "react";
import PropTypes from "prop-types";
import hoistNonReactStatics from "hoist-non-react-statics";

import getInjectors from "./reducerInjectors";
import store from "../configStore/configStore";

const withReducer =
  ({ key, reducer }) =>
  (WrappedComponent) => {
    const ReducerInjector = (props) => {
      const { injectReducer } = getInjectors(store);

      useEffect(() => {
        injectReducer(key, reducer);
      }, [store, key, reducer]);

      return <WrappedComponent {...props} />;
    };

    ReducerInjector.contextTypes = {
      store: PropTypes.object.isRequired,
    };

    ReducerInjector.displayName = `withReducer(${
      WrappedComponent.displayName || WrappedComponent.name || "Component"
    })`;

    return hoistNonReactStatics(ReducerInjector, WrappedComponent);
  };

export default withReducer;
