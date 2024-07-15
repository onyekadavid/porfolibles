"use client";
import React from "react";
import Link from "next/link";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from "@mui/material/CircularProgress";
import { useFormik } from "formik";
import * as yup from "yup";
import { db } from "@/lib/firebase.setting";
import { collection,addDoc } from "firebase/firestore";


const rules = yup.object().shape({
    title:yup.string().required().min(3),
    wallet:yup.string().required().min(26).max(62),
    price:yup.number().required(),
    ticker:yup.string().required().min(3),
    notes:yup.string(),
    quantity:yup.string().required().min(1)

})

export default function Create() {
    const [open, setOpen] = React.useState(false);
    const [openProgress, setOpenPregres] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

   // create records in Firestore -----------
   const createRecords = async () => {
    await addDoc(collection(db, "assets"),{
    title:values.title,
    wallet:values.wallet,
    price:values.price,
    ticker:values.ticker,
    quantity:values.quantity,
    notes:values.notes,
    timestamp:new Date().getTime(),
    createBy:null,
    }).then (() => {
        handleClickOpen();
        setOpenPregres(false);
    }).catch(err => console.error(err))
   }

    const { values, handleBlur, handleSubmit, touched, errors, handleChange } = useFormik({
        initialValues: { title: '', wallet: '', price: 0, ticker: '', notes: '', quantity:0, },
        onSubmit: (values) => {
            setOpenPregres(true);

            // call function to write to firestore db
        createRecords()
        }, 
         validationSchema:rules
    })
    return (
        <>
            <main className="min-h-[480px] flex justify-center px-3 md:px-12 lg:px-24 py-12">

                <form onSubmit={handleSubmit} className="w-full md:w-[380px] flex flex-col gap-4 border border-gray-300 p-4">
                    <div>
                        <TextField
                            id="title"
                            label="Title"
                            variant="standard"
                            placeholder="quantity"
                            className="w-full"
                            value={values.title}
                            onChange={handleChange}
                        />
                        {touched.title && errors.title ? <span className="text-xs text-red-500">{errors.title}</span> : null}
                    </div>

                    <div>
                        <TextField
                            id="wallet"
                            label="wallet"
                            variant="standard"
                            placeholder="quantity"
                            className="w-full"
                            value={values.wallet}
                            onChange={handleChange}
                        />
                        {touched.wallet && errors.wallet ? <span className="text-xs text-red-500">{errors.wallet}</span> : null}
                    </div>

                    <div>
                        <TextField
                            type="number"
                            id="price"
                            label="price"
                            variant="standard"
                            placeholder="price"
                            className="w-full"
                            value={values.price}
                            onChange={handleChange}
                        />
                        {touched.price && errors.price ? <span className="text-xs text-red-500">{errors.prince}</span> : null}
                    </div>

                    <div>
                        <TextField
                            id="ticker"
                            label="ticker"
                            variant="standard"
                            placeholder="ticker"
                            className="w-full"
                            value={values.ticker}
                            onChange={handleChange}
                        />
                        {touched.ticker && errors.ticker ? <span className="text-xs text-red-500">{errors.ticker}</span> : null}
                    </div>
                    <div>
                        <TextField
                            multiline={true}
                            rows={3}
                            id="notes"
                            label="notes"
                            variant="standard"
                            placeholder="notes"
                            className="w-full"
                            value={values.notes}
                            onChange={handleChange}
                        />
                        {touched.notes && errors.notes ? <span className="text-xs text-red-500">{errors.notes}</span> : null}
                    </div>


                    <Button type="submit" variant="contained" color="secondary">
                        {openProgress ? <CircularProgress color="info" /> : <span>CREATE PORTFOLIO</span>}
                    </Button>
                </form>

            </main>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Feedback</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Your asset was added successfully!
                    </DialogContentText>

                    <Link className="bg-stone-600 py-1 px-2 text-stone-50 rounded-sm mt-4" 
                    href="/dashboard">Return to Dashboard</Link>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
