"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { CiCirclePlus } from "react-icons/ci";
import { BiCabinet } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUserCircle, } from "react-icons/fa";
import { collection,onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase.setting";
import { AssetTab } from "../components/AssetTab";

export default function Dashboard() {
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        const getAssetData = async () => {
           
            const q = collection(db, 'assets');

            onSnapshot(q,querySnapshot => {
                const compliedData = [];

                querySnapshot.docs.forEach(doc => {
                    compliedData.push({
                        id: doc.id,
                        data: doc.data()
                    })
                });
                setAssets(compliedData)
            });

            
           
        }
        // call the function
        getAssetData()
    }, [])

    console.log(assets);

    return (
        <main className="min-h-[480px] grid md:grid-cols-2 md:gap-8 lg:gap-12  px-3 md:px-12 lg:px-24 py-12">
            <section className="grid grid-cols-2 grid-row-2 gap-3 p-1">
                <Link href="/dashboard/create" className={styles.btn}>
                    <CiCirclePlus className={styles.iconStyle} />
                    <span className={styles.btnText}>Create</span>
                </Link>
                <button className={styles.btn}>
                    <BiCabinet className={styles.iconStyle} />
                    <span className={styles.btnText}>Asset</span>
                </button>
                <button className={styles.btn}>
                    <IoSettingsOutline className={styles.iconStyle} />
                    <span className={styles.btnText}>Manage</span>
                </button>
                <button className={styles.btn}>
                    <FaRegUserCircle className={styles.iconStyle} />
                    <span className={styles.btnText}>Profit</span>
                </button>
            </section>
            <aside className="p-4 rounded-lg border border-[#B6BBC4]">
                <blockquote className="border-b border-[#B6BBC4] pb-2">
                    <p className="uppercase text-2xl text-[#161A30]">My portfolio</p>
                </blockquote>
                <div className="flex flex-col gap-2">
                    {assets.map(item => {
                        return (
                            <AssetTab
                                id={item.id}
                                title={item.data.title}
                                holdWallet={item.data.wallet}
                                qty={item.data.quantity}
                                tick={item.data.ticker}
                                price={item.data.price}
                                notes={item.data.notes}
                                key={item.id} />
                        )

                    })}
                </div>

            </aside>
        </main>

    )
}

const styles = {
    btn: "flex flex-col justify-center items-center gap-3 bg-[#A91D3A] rounded-lg p-4",
    iconStyle: "text-[#F0ECE5] text-5xl",
    btnText: "text-[#F0ECE5] text-2xl uppercase"
}