import React, {Component, ErrorInfo} from "react";
import {IError} from "../Types";
import ContentLoader from "react-content-loader"

export function FullPageSpinner() {
  return (
    <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="spinner-border avatar-lg text-primary" role="status"> </div>
    </div>
  );
}

export class ErrorBoundary extends Component {
  state = { error: false, errorMessage: '' };

  static getDerivedStateFromError(error: Error) {
    return { error: true, errorMessage: error.toString() };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log("Error ", error)
    return { error: true, errorMessage: error.toString() };
  }

  render() {
    const { error, errorMessage } = this.state;
    const { children } = this.props;
    return error ? <ErrorFallbackUI {...{ error, errorMessage }} /> : children;
  }
}
export const ErrorFallbackUI: React.FC<IError> = (props) => {
  return (
    <div className="covid-wrap">
      <div className="covid-test-wrap test-step active">
        An Error Occured { props.errorMessage }
      </div>
    </div>
  )
}

export function  PageLoader() {
  return <>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="covid-wrap">
      <div className="covid-test-wrap test-step active">
        <ContentLoader
          speed={2}
          width={400}
          height={160}
          viewBox="0 0 400 160"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="48" y="8" rx="3" ry="3" width="88" height="6"/>
          <rect x="48" y="26" rx="3" ry="3" width="52" height="6"/>
          <rect x="0" y="56" rx="3" ry="3" width="410" height="6"/>
          <rect x="0" y="72" rx="3" ry="3" width="380" height="6"/>
          <rect x="0" y="88" rx="3" ry="3" width="178" height="6"/>
          <circle cx="20" cy="20" r="20"/>
        </ContentLoader>

        <ContentLoader
          speed={2}
          width={400}
          height={160}
          viewBox="0 0 400 160"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="48" y="8" rx="3" ry="3" width="88" height="6"/>
          <rect x="48" y="26" rx="3" ry="3" width="52" height="6"/>
          <rect x="0" y="56" rx="3" ry="3" width="410" height="6"/>
          <rect x="0" y="72" rx="3" ry="3" width="380" height="6"/>
          <rect x="0" y="88" rx="3" ry="3" width="178" height="6"/>
          <circle cx="20" cy="20" r="20"/>
        </ContentLoader>
        <ContentLoader
          speed={2}
          width={400}
          height={160}
          viewBox="0 0 400 160"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="48" y="8" rx="3" ry="3" width="88" height="6"/>
          <rect x="48" y="26" rx="3" ry="3" width="52" height="6"/>
          <rect x="0" y="56" rx="3" ry="3" width="410" height="6"/>
          <rect x="0" y="72" rx="3" ry="3" width="380" height="6"/>
          <rect x="0" y="88" rx="3" ry="3" width="178" height="6"/>
          <circle cx="20" cy="20" r="20"/>
        </ContentLoader>
        <ContentLoader
          speed={2}
          width={400}
          height={160}
          viewBox="0 0 400 160"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="48" y="8" rx="3" ry="3" width="88" height="6"/>
          <rect x="48" y="26" rx="3" ry="3" width="52" height="6"/>
          <rect x="0" y="56" rx="3" ry="3" width="410" height="6"/>
          <rect x="0" y="72" rx="3" ry="3" width="380" height="6"/>
          <rect x="0" y="88" rx="3" ry="3" width="178" height="6"/>
          <circle cx="20" cy="20" r="20"/>
        </ContentLoader>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  </>
}
