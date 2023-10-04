import { Container } from "reactstrap";
import head from "next/head";


const BasePage = props=>{
    const{className="",header,children} = props;
    return (
      <>
      <head>
        <tit>Leila Faez Portfolio</tit>
      </head>
        <div className={`base-page ${className}`}>
          <Container>
            {header && (
              <div className="page-header">
                <h1 className="page-header-title">{header}</h1>
              </div>
            )}
            {children}
          </Container>
        </div>
      </>
    );
}

export default BasePage;