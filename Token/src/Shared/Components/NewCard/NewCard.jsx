import React, { useState } from "react";
import SearchIcon from "../../../Assets/Icons/searchicon.png";
import SearchImg from "../../../Assets/images/SearchImg.png";

// SF Pro Display import (TTF fayl lokal)
import SFProRegular from "../../../Assets/fonts/SFProDisplay-Regular.ttf";

export default function ResearchPage() {
    const [tab, setTab] = useState("all");
    const [search, setSearch] = useState("");

    const posts = [
        {
            title: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc",
            desc: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc sollicitudin viverra semper ut netus.",
            date: "November 20, 2025",
            company: "Company",
            img: SearchImg,
            tag: "research"
        },
                {
            title: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc",
            desc: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc sollicitudin viverra semper ut netus.",
            date: "November 20, 2025",
            company: "Company",
            img: SearchImg,
            tag: "research"
        },
                {
            title: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc",
            desc: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc sollicitudin viverra semper ut netus.",
            date: "November 20, 2025",
            company: "Company",
            img: SearchImg,
            tag: "research"
        },
        {
            title: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc",
            desc: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc sollicitudin viverra semper ut netus.",
            date: "November 20, 2025",
            company: "Company",
            img: SearchImg,
            tag: "research"
        },
        {
            title: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc",
            desc: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc sollicitudin viverra semper ut netus.",
            date: "November 20, 2025",
            company: "Company",
            img: SearchImg,
            tag: "announcement"
        },
                {
            title: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc",
            desc: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc sollicitudin viverra semper ut netus.",
            date: "November 20, 2025",
            company: "Company",
            img: SearchImg,
            tag: "research"
        },
        {
            title: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc",
            desc: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc sollicitudin viverra semper ut netus.",
            date: "November 20, 2025",
            company: "Company",
            img: SearchImg,
            tag: "research"
        },
        {
            title: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc",
            desc: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc sollicitudin viverra semper ut netus.",
            date: "November 20, 2025",
            company: "Company",
            img: SearchImg,
            tag: "announcement"
        },
                {
            title: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc",
            desc: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc sollicitudin viverra semper ut netus.",
            date: "November 20, 2025",
            company: "Company",
            img: SearchImg,
            tag: "research"
        },
        {
            title: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc",
            desc: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc sollicitudin viverra semper ut netus.",
            date: "November 20, 2025",
            company: "Company",
            img: SearchImg,
            tag: "announcement"
        },
        {
            title: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc",
            desc: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc sollicitudin viverra semper ut netus.",
            date: "November 20, 2025",
            company: "Company",
            img: SearchImg,
            tag: "announcement"
        },
                {
            title: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc",
            desc: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc sollicitudin viverra semper ut netus.",
            date: "November 20, 2025",
            company: "Company",
            img: SearchImg,
            tag: "research"
        },
        {
            title: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc",
            desc: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc sollicitudin viverra semper ut netus.",
            date: "November 20, 2025",
            company: "Company",
            img: SearchImg,
            tag: "research"
        },
        {
            title: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc",
            desc: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc sollicitudin viverra semper ut netus.",
            date: "November 20, 2025",
            company: "Company",
            img: SearchImg,
            tag: "announcement"
        },
    ];

    const filtered = posts
        .filter((p) => tab === "all" || p.tag === tab)
        .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <style>{`
                @font-face {
                    font-family: 'SF Pro Display';
                    src: url(${SFProRegular}) format('truetype');
                    font-weight: 400;
                    font-style: normal;
                }

                body, .research-container {
                    font-family: 'SF Pro Display', sans-serif;
                }

                @keyframes fadeIn {
                  from { opacity: 0; transform: scale(0.95); }
                  to { opacity: 1; transform: scale(1); }
                }

                .grid {
                  display: grid;
                  grid-template-columns: repeat(3, 400px);
                  justify-content: space-between;
                  gap: 24px;
                  width: 1248px;
                  margin: auto;
                  margin-top: 30px;
                }

                @media (max-width: 900px) {
                  .grid { grid-template-columns: repeat(2, 1fr); width: auto; }
                }
                @media (max-width: 600px) {
                  .grid { grid-template-columns: 1fr; width: auto; }
                }

                .card {
                  animation: fadeIn 0.4s ease;
                  background: none;
                  padding: 0px;
                  border-radius: 10px;
                  width: 380px;
                  height: 467px;
                }

                .btn-nav {
                  background: rgba(33, 35, 44, 0.13);
                  color: #fff;
                  border: none;
                  padding: 20px 24px;
                  margin-right: 8px;
                  border-radius: 20px;
                  cursor: pointer;
                  transition: all 0.2s;
                  border: 2px solid rgba(255, 255, 255, 0.5);
                  font-family: 'SF Pro Display', sans-serif;
                }

                .btn-nav:hover {
                  background: #444752;
                }

                .btn-nav.active {
                  background: #f5f9ff;
                  color: #090a0e;
                  border: 2px solid #f5f9ff;
                }

                input {
                  font-family: 'SF Pro Display', sans-serif;
                }
            `}</style>

            <div className="research-container" style={{ background: "#0d0f14", color: "white" }}>
                <div style={{ display: "flex", alignItems: "center", width: "1248px", margin: "auto", paddingTop: "64px", paddingBottom: "48px" }}>
                    <button
                        onClick={() => setTab("all")}
                        className={`btn-nav ${tab === "all" ? "active" : ""}`}
                    >
                        All News
                    </button>
                    <button
                        onClick={() => setTab("research")}
                        className={`btn-nav ${tab === "research" ? "active" : ""}`}
                    >
                        Research
                    </button>
                    <button
                        onClick={() => setTab("announcement")}
                        className={`btn-nav ${tab === "announcement" ? "active" : ""}`}
                    >
                        Announcement
                    </button>

                    <div style={{ position: "relative", marginLeft: "auto" }}>
                        <span style={{ position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", opacity: 0.6  , padding: "20px 24px"}}>
                            <img src={SearchIcon} alt="search" style={{ width: "14px", height: "14px" }} />
                        </span>
                        <input
                            placeholder="Search Posts..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{ padding: "20px 24px", width: "500px", borderRadius: "20px", paddingLeft: "60px", border: "1px solid #444752", background: "#1b1d23", color: "white", fontSize: "18px" }}
                        />
                    </div>
                </div>

                <div className="grid">
                    {filtered.map((p, i) => (
                        <div key={i} className="card">
                            <img src={p.img} style={{ borderRadius: "12px", width: "100%", height: "224.98px" }} alt="post" />
                            <div style={{padding:"25px 20px"}}>
                                <h3 style={{ marginTop: "10px", fontSize: "21px", fontWeight: "600" , lineHeight: "30px" , fontStyle: "semibold" }}>{p.title}</h3>
                                <p style={{ fontSize: "15px", color: "rgba(255, 255, 255, 0.698)" , fontWeight: "400" , lineHeight: "24px" }}>{p.desc}</p>
                                <div style={{ fontSize: "15px", marginTop: "5px", opacity: 0.7, display: "flex", alignItems: "center", gap: "5px" , lineHeight: "22px" }}>
                                    <img style={{ width: "34px", height: "34px" }} src={SearchImg} alt="" />
                                    {p.company} • {p.date}
                                </div></div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
