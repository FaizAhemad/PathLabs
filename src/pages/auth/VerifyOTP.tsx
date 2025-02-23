import {Flex, Input, InputRef, message, Space, Typography} from "antd";
import {useCallback, useEffect, useRef, useState} from "react";
import icons from "../../icons";
import Button from "../../ui/button";

export default function VerifyOTP({
  otpSent = true,
  mobileNumber = "7620808890",
  goToSlide = (num: number) => {},
}) {
  const [messageApi, contextHolder] = message.useMessage();
  const otpLength = 6; // Number of OTP digits
  const RESEND_TIME = 30;
  const [timer, setTimer] = useState<number>(RESEND_TIME);
  const [isResendDisabled, setIsResendDisabled] = useState<boolean>(true);
  // Start the timer when the component mounts
  useEffect(() => {
    if (timer === 0) {
      setIsResendDisabled(false);
      return;
    }

    const interval = setInterval(() => {
      setTimer((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleResendOTP = useCallback(() => {
    message.success("OTP resent successfully!");
    setTimer(RESEND_TIME);
    setIsResendDisabled(true);
  }, []);
  const [otp, setOtp] = useState<string[]>(new Array(otpLength).fill(""));
  const [verifying, setVerifying] = useState(false);
  const success = useCallback(
    (msg: string) => {
      messageApi.open({
        type: "success",
        content: msg,
        duration: 2,
      });
    },
    [messageApi]
  );

  const inputRefs = useRef<Array<InputRef | null>>(
    new Array(otpLength).fill(null)
  );

  // Handle input change
  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return; // Allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1); // Allow only last digit
    setOtp(newOtp);

    if (value && index < otpLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace key press
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle paste event
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .trim()
      .slice(0, otpLength);

    if (!/^\d+$/.test(pastedData)) return; // Only accept numbers

    const newOtp = pastedData.split("");
    for (let i = 0; i < otpLength; i++) {
      newOtp[i] = newOtp[i] || ""; // Ensure array length is maintained
    }
    setOtp(newOtp);

    // Move focus to the last filled input
    const lastFilledIndex = newOtp.findIndex((digit) => digit === "");
    inputRefs.current[
      lastFilledIndex !== -1 ? lastFilledIndex : otpLength - 1
    ]?.focus();
  };

  useEffect(() => {
    if (otpSent) {
      success("OTP sent successfully");
    }
  }, [otpSent, success]);

  const onVerify = () => {
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      success("OTP Verified");
    }, 3000);
  };

  const onEditNumber = () => {
    goToSlide(0);
  };

  return (
    <>
      {contextHolder}

      <Flex
        gap={10}
        style={{flexDirection: "column", width: "400px", margin: "40px 0"}}
      >
        <div>
          <Typography style={{fontWeight: "600"}}>Enter OTP</Typography>
          <Typography>
            We have sent an OTP on <b>{mobileNumber}</b>
            <Button type="link" onClick={onEditNumber}>
              Edit Number
            </Button>
          </Typography>
        </div>

        <Space>
          {otp.map((digit, index) => (
            <Input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              value={digit}
              maxLength={1}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              style={{
                width: 40,
                textAlign: "center",
                marginRight: 5,
              }}
            />
          ))}
        </Space>
        {/* <Input
          value={otp}
          onChange={({target: {value}}: ChangeEvent<HTMLInputElement>) =>
            setOtp(value)
          }
        /> */}
        <Button
          type="primary"
          color="green"
          variant="solid"
          style={{alignSelf: "start"}}
          loading={verifying}
          onClick={onVerify}
          icon={icons["arrowRight"]}
        >
          Verify
        </Button>

        <Typography>
          Didn't received OTP?
          <Button
            type="link"
            onClick={handleResendOTP}
            disabled={isResendDisabled}
          >
            {isResendDisabled ? `Resend OTP in ${timer}s` : "Resend OTP"}
          </Button>
        </Typography>
      </Flex>
    </>
  );
}
