import React from "react";
import { Link } from "react-router-dom";

const images = require.context("../../assets/img/", true);

export const ArtGenerator = ({ keyJson, valueJson, i }) => {
  function retornoElementos() {
    switch (keyJson.slice(0, 4)) {
      case "imgb":
        return (
          <div className="article_gen--img">
            <img src={images(valueJson)} alt=""></img>
          </div>
        );

          case "iinb":
            return (
              <div className="article_gen--imgInt">
                <img src={images(valueJson)} alt=""></img>
              </div>
            );

          case "vidb":
            return (
              <div className="article_gen--video">
                  <iframe
                    title="Video Player"
                    src={`https://www.youtube.com/embed/${valueJson}`}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
              </div>
            );

          case "titb":
            return (
              <div className="article_gen--tit">
                <h2>{valueJson}</h2>
              </div>
            );

            case "tit2":
              return (
                <div className="article_gen--tit2">
                  <h3>{valueJson}</h3>
                </div>
              );

              case "tit3":
                return (
                  <div className="article_gen--tit3">
                    <h4>{valueJson}</h4>
                  </div>
                );


          case "subb":
            return (
              <div className="article_gen--sub">
                <h4>{valueJson}</h4>
              </div>
            );

          case "txtb":
            return (
              <div className="article_gen--txt">
                <p>{valueJson}</p>
              </div>
            );

          case "txlb":
            return <div className="article_gen--txtLink">{txtLink(valueJson)}</div>;

          case "bytb":
            return (
              <div className="article_gen--by">
                <p>
                  by <Link to="/">{valueJson}</Link>
                </p>
              </div>
            );

            case "titk":
              return (
                <div className="article_gen--tit2" id={valueJson[1]}>
    
                  <h4>{valueJson[0]}</h4>
    
                </div>
              );



              case "sepA":
                return (
                  <div className="article_gen--sepA">      
                  </div>
                );

                case "sepB":
                  return (
                    <div className="article_gen--sepB">      
                    </div>
                  );


                  case "sepC":
                    return (
                      <div className="article_gen--sepC">      
                      </div>
                    );


                    case "sepD":
                      return (
                        <div className="article_gen--sepD">      
                        </div>
                      );


          case "date":
            return (
              <div className="article_gen--date">
                <p>{valueJson}</p>
              </div>
            );

          case "lnkb":
            return (
              <button className="article_gen--link">
                <a href={valueJson[0]} target="_blank" rel="noopener noreferrer">
                  {valueJson[1]}
                </a>
              </button>
            );

          case "dotb":
            return (
              <div className="article_gen--dot">
                <p>{valueJson}</p>
              </div>
            );

          case "dtlb":
            return (
              <div className="article_gen--dotLink">{txtLink(valueJson, i)}</div>
            );

            
      default:
        break;

    }
  }

  return retornoElementos();

};



  function txtLink(data, index) {
    let parts = data[0].split("<");
    let result = [];
    let indexLink = 1;
    for (let i = 0; i < parts.length; i++) {
      if (parts[i].startsWith("/")) {
        result.push(parts[i].substring(parts[i].indexOf(">") + 1));
      } else {
        let tagEndIndex = parts[i].indexOf(">");
        if (tagEndIndex !== -1) {
          result.push(
            <a key={index + i} target="_blank" href={data[indexLink]} rel="noopener noreferrer">
              {parts[i].substring(tagEndIndex + 1)}
            </a>
          );
          indexLink++;
        } else {
          result.push(parts[i]);
        }
      }
    }
    return <p>{result}</p>;
  }
