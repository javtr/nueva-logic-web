import React from "react";
import { Link } from "react-router-dom";

const images = require.context("../../assets/img/", true);

export const BlogGenerator = ({ keyJson, valueJson, i }) => {
  function retornoElementos() {
    switch (keyJson.slice(0, 4)) {
      case "imgb":
        return (
          <div className="indicators_gen--img">
            <img src={images(valueJson)} alt=""></img>
          </div>
        );

          case "iinb":
            return (
              <div className="indicators_gen--imgInt">
                <img src={images(valueJson)} alt=""></img>
              </div>
            );

          case "vidb":
            return (
              <div className="indicators_gen--video">
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
              <div className="indicators_gen--tit">
                <h2>{valueJson}</h2>
              </div>
            );

            case "tit2":
              return (
                <div className="indicators_gen--tit2">
                  <h4>{valueJson}</h4>
                </div>
              );


          case "subb":
            return (
              <div className="indicators_gen--sub">
                <h4>{valueJson}</h4>
              </div>
            );

          case "txtb":
            return (
              <div className="indicators_gen--txt">
                <p>{valueJson}</p>
              </div>
            );

          case "txlb":
            return <div className="indicators_gen--txtLink">{txtLink(valueJson)}</div>;

          case "bytb":
            return (
              <div className="indicators_gen--by">
                <p>
                  by <Link to="/">{valueJson}</Link>
                </p>
              </div>
            );

          case "date":
            return (
              <div className="indicators_gen--date">
                <p>{valueJson}</p>
              </div>
            );

          case "lnkb":
            return (
              <button className="indicators_gen--link">
                <a href={valueJson[0]} target="_blank" rel="noopener noreferrer">
                  {valueJson[1]}
                </a>
              </button>
            );

          case "dotb":
            return (
              <div className="indicators_gen--dot">
                <p>{valueJson}</p>
              </div>
            );

          case "dtlb":
            return (
              <div className="indicators_gen--dotLink">{txtLink(valueJson, i)}</div>
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
