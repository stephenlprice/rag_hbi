import { useEffect } from "react";
import VegaLiteViz from "../VegaLiteViz";
import { parseBan } from "../../utils/parse";
import Carousel from "../Carousel";
import bundle from "../../models/Insights/mocks/generate_detail_insight.json"

// returns a minimal representation for the UI
function Detail(props) {
  const setMetricValue = props.setMetricValue;
  const parsedBundles = parseBan(bundle);
  const { value } = parsedBundles[0];
  
  // useEffect(() => {
  //   // the metric value is controlled in the parent component but set here
  //   props.pushQA(value);
  // }, [value]);

  useEffect(() => {
    // the metric value is controlled in the parent component but set here
    setMetricValue(value);
  }, [value, setMetricValue]);


  return (
    <div className="flex justify-center">
      <Carousel> 
      {parsedBundles.map((insight, index) => {
        const { viz, question, markup } = insight;
        return insight.type !== 'popc' ? (
          <div key={index} className="max-w-2xl w-full mx-4">
            <p className="text-orange-400 italic text-2xl font-semibold my-4">
              Insight
              <span className="text-slate-100 italic text-2xl font-semibold my-4 ml-4" 
                dangerouslySetInnerHTML={{__html: question}} 
              />
            </p>
            {Object.entries(viz).length === 0 ? <></> : <VegaLiteViz height={104} spec={viz}></VegaLiteViz>}
            <p className="text-slate-100 text-lg my-4" dangerouslySetInnerHTML={{__html: markup}} />
          </div>
        ) : <></>
      })}
      </Carousel>
    </div>
  ) 
}

export default Detail;