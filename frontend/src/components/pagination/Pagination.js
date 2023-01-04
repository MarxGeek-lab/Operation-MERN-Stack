import React, { useEffect, useState } from "react"
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"

import PaginationStyle from "./Pagination.module.css"

const Pagination = ({ nb, countTab, setNextt, setPrevious, nextt, previous }) => {

    let nbPage = Math.round(nextt/nb);

    const nexts = (news) => {
        let nextnb = news + nb;

        if (nextnb < countTab) {
            setPrevious((news + 1))
            setNextt(nextnb)
        } else if (nextnb > countTab) {
            if (Math.abs(countTab - nextnb)+1 < nb) {
                setPrevious((news + 1))
                setNextt((news + (nb - Math.abs(countTab-nextnb))))
            }
        }
    }

    const previouss = (old) => {
        let nbprev = old - nb;

        if (nbprev >= 0) {
            setPrevious((nbprev))
            setNextt((old - 1))
        }
    }


    return (
        <div className={PaginationStyle.pagination}>
            <div className={PaginationStyle.div}>
                <span> {nbPage} of {Math.round(countTab/nb)} </span>
                <div>
                    <button onClick={() => previouss(previous)}> <FaAngleDoubleLeft /> </button>
                    <span> {nbPage} </span>
                    <button onClick={() => nexts(nextt)}> <FaAngleDoubleRight /> </button>
                </div>
            </div>
        </div>
    )
}

export default Pagination