import React from "react";
import "./styles.css"

export default function Footer() {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h3>SEASON</h3>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <ul className="list-unstyled">
                            <li>주소 : (08821) 서울시 관악구 호암로 546 (신림동)</li>
                            <li>개발자 : 010-9793-8993</li>
                            <li>인스타 : @yejin0715</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} season
                    </p>
                </div>
            </div>
        </div>

        
    )
}