// components/SubscribeModal.js
import React, { use, useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

// material ui icon
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import Image from "next/image";
export default function SubscribePopup() {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: 1500,
      backgroundColor: "#B99272",
    },
  };

  const [open, setOpen] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  // is number is the database
  // if yes, setSuccess(true)
  // if no, setFailure(true)

  // wait for 5 seconds before showing the popup
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 5000);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubscribe = async () => {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber }),
    });

    const data = await res.json();
    setMessage(data.message);

    if (res.status === 200) {
      handleSuccess();
    }
    if (res.status === 409) {
      handleExistingSubscriber();
    }
    if (res.status === 500) {
      handleError();
    }

    setPhoneNumber("");
  };

  const handleSuccess = () => {
    setSuccess(true);
    return (
      <div
        style={{
          backgroundColor: "#B99272",
          color: "#000",
          textAlign: "center",
        }}
      >
        <p>Thank you for subscribing!</p>
      </div>
    );
  };

  const handleFailure = () => {
    setSuccess(false);
    return (
      <div
        style={{
          backgroundColor: "#B99272",
          color: "#000",
          textAlign: "center",
        }}
      >
        <p>Something went wrong. Please try again.</p>
      </div>
    );
  };

  const handleError = () => {
    setError(true);
    return (
      <div
        style={{
          backgroundColor: "#B99272",
          color: "#000",
          textAlign: "center",
        }}
      >
        <p>Something went wrong. Please try again.</p>
      </div>
    );
  };

  const handleExistingSubscriber = () => {
    // set existing subscriber message to true if the phone number is already in the database
    // return a message that says "You are already subscribed"
    setExistingSubscriber(true);
    return (
      <div
        style={{
          backgroundColor: "#B99272",
          color: "#000",
          textAlign: "center",
        }}
      >
        <p>You are already subscribed.</p>
      </div>
    );
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1500,
      }}
    >
      <div style={customStyles}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          slotProps={{
            style: {
              zIndex: 1500,
              backgroundColor: "#B99272",
            },
          }}
        >
          <div
            style={{
              textAlign: "center",
              backgroundColor: "#B99272",
              color: "#000",
            }}
          >
            <Image
              src="/images/rcc_logo.png"
              alt="Rhodes Coffee Co Logo"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>
          <DialogTitle
            id="form-dialog-title"
            style={{
              backgroundColor: "#B99272",
              color: "#000",
              textAlign: "center",
            }}
          >
            Subscribe to receive a coupon code for 10% off your first order! 🎉
            for RhodesCoffeCo Merchandise
          </DialogTitle>
          <DialogContent
            style={{
              backgroundColor: "#B99272",
              color: "#000",
              textAlign: "center",
            }}
          >
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "#fff",
                backgroundColor: "#000",
                fontWeight: "bolder",
                fontSize: "1.0rem",
              }}
            >
              <CloseIcon />
            </IconButton>

            <PhoneInput
              placeholder="Enter phone number"
              defaultCountry="US"
              value={phoneNumber}
              onChange={setPhoneNumber}
              style={{
                backgroundColor: "#B99272",
                color: "#000",
                textAlign: "center",
              }}
            />

            {message &&
              (message === "You have already subscribed" ? (
                <div
                  style={{
                    backgroundColor: "#B99272",
                    color: "red",
                    textAlign: "center",
                  }}
                >
                  <p>You are already subscribed.</p>
                </div>
              ) : message ===
                "Phone number must be in E.164 format (+15555555555)" ? (
                <div
                  style={{
                    backgroundColor: "#B99272",
                    color: "red",
                    textAlign: "center",
                  }}
                >
                  <p>Phone number must be in E.164 format (+15555555555)</p>
                </div>
              ) : message === "Something went wrong. Please try again." ? (
                <div
                  style={{
                    backgroundColor: "#B99272",
                    color: "red",
                    textAlign: "center",
                  }}
                >
                  <p>Something went wrong. Please try again.</p>
                </div>
              ) : message === "You have been subscribed successfully!" ? (
                <div
                  style={{
                    backgroundColor: "#B99272",
                    color: "green",
                    textAlign: "center",
                  }}
                >
                  <p>You have been subscribed successfully!</p>
                </div>
              ) : message === "Phone number is required" ? (
                <div
                  style={{
                    backgroundColor: "#B99272",
                    color: "red",
                    textAlign: "center",
                  }}
                >
                  <p>Phone number is required.</p>
                </div>
              ) : (
                <div
                  style={{
                    backgroundColor: "#B99272",
                    color: "red",
                    textAlign: "center",
                  }}
                >
                  <p>Something went wrong. Please try again.</p>
                </div>
              ))}
          </DialogContent>
          <DialogActions
            style={{
              backgroundColor: "#B99272",
              color: "#000",
              textAlign: "center",
            }}
          >
            <Button
              onClick={handleSubscribe}
              onAbortCapture={handleClose}
              style={{
                backgroundColor: "#000",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>

        <style jsx global>{`
          .MuiDialog-paper {
            width: 400px;
          }
        `}</style>
      </div>
    </div>
  );
}
