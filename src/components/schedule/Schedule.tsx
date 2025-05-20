import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { SectionHeader } from "../util/SectionHeader";
export default function Schedule() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "portfolio-website" });
            cal("ui", { "cssVarsPerTheme": { "light": { "cal-brand": "#18181A" }, "dark": { "cal-brand": "#18181A" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return (
        <>
            <div id="schedule" className="section-wrapper">
                <div className="text-center">
                    <SectionHeader title="Schedule a call" dir="l" />
                </div>
                <Cal namespace="portfolio-website"
                    calLink="romitgabani/portfolio-website"
                    style={{ width: "100%", height: "100%", overflow: "scroll" }}
                    config={{ "layout": "month_view" }}
                />
            </div>
        </>
    );
};
