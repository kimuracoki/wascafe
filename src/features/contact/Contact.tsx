import ContentTitle from "@/components/ContentTitle";
import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, FormHelperText, Grid2, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { useState } from "react";
import FormLabelColumn from "./components/FormLabelColumn";
import FormComponentColumn from "./components/FormComponentColumn";
import FormRow from "./components/FormRow";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        inquiryDetails: '',
        agreeToPrivacyPolicy: false,
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        inquiryType: false,
        agreeToPrivacyPolicy: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const newErrors = {
            name: formData.name.trim() === '',
            email: !/\S+@\S+\.\S+/.test(formData.email), // メール形式の簡易チェック
            inquiryType: formData.inquiryType === '',
            agreeToPrivacyPolicy: !formData.agreeToPrivacyPolicy,
        };
        setErrors(newErrors);

        if (!Object.values(newErrors).includes(true)) {
            setFormData({
                name: '',
                email: '',
                phone: '',
                inquiryType: '',
                inquiryDetails: '',
                agreeToPrivacyPolicy: false,
            });
        }
    };

    return (
        <Container
            disableGutters
            maxWidth="md"
            sx={{
                paddingTop: '100px',
                width: { xs: '300px', sm: '80%' },
            }} >
            <ContentTitle title="お問い合わせ" />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '80px'
                }}
            >
                <Typography
                    sx={{
                        whiteSpace: 'pre-line',
                        lineHeight: '2rem',
                        textAlign: 'center',
                        fontSize: { xs: '12px', sm: '16px' },
                    }}>{`ワズカフェでは、お席のご予約、お誕生日のお祝いや貸切のご相談などを随時受け付けております。
                        お気軽にお問い合わせください。`}
                </Typography>
            </Box>
            <FormRow>
                <FormLabelColumn>お名前（必須）</FormLabelColumn>
                <FormComponentColumn>
                    <TextField
                        required
                        fullWidth
                        label="名前"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                        helperText={errors.name ? '名前を入力してください。' : ''}
                        margin="normal"
                    />
                </FormComponentColumn>
            </FormRow>
            <FormRow>
                <FormLabelColumn>メールアドレス（必須）</FormLabelColumn>
                <FormComponentColumn>
                    <TextField
                        required
                        fullWidth
                        label="メールアドレス"
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        helperText={errors.email ? '有効なメールアドレスを入力してください。' : ''}
                        margin="normal"
                    />
                </FormComponentColumn>
            </FormRow>
            <FormRow>
                <FormLabelColumn>お電話番号</FormLabelColumn>
                <FormComponentColumn>
                    <TextField
                        fullWidth
                        label="電話番号"
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        margin="normal"
                    />
                </FormComponentColumn>
            </FormRow>
            <FormRow>
                <FormLabelColumn>お問い合わせの種類</FormLabelColumn>
                <FormComponentColumn>
                    <FormControl component="fieldset" margin="normal" fullWidth error={errors.inquiryType}>
                        <RadioGroup
                            name="inquiryType"
                            value={formData.inquiryType}
                            onChange={handleChange}
                            row
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '80%',
                            }}
                        >
                            <FormControlLabel value="お席の予約" control={<Radio />} label={
                                <Typography
                                    sx={{
                                        fontSize: { xs: '12px', sm: '16px' }
                                    }}>
                                    お席の予約
                                </Typography>
                            } />
                            <FormControlLabel value="貸切のご相談" control={<Radio />} label={
                                <Typography
                                    sx={{
                                        fontSize: { xs: '12px', sm: '16px' }
                                    }}>
                                    貸切のご相談
                                </Typography>
                            } />
                            <FormControlLabel value="その他" control={<Radio />} label={
                                <Typography
                                    sx={{
                                        fontSize: { xs: '12px', sm: '16px' }
                                    }}>
                                    その他
                                </Typography>
                            } />
                        </RadioGroup>
                        {errors.inquiryType && (
                            <FormHelperText>お問い合わせの種類を選択してください。</FormHelperText>
                        )}
                    </FormControl>
                </FormComponentColumn>
            </FormRow>
            <Grid2
                container
                direction="row"
            >
                <FormLabelColumn>お問い合わせ内容</FormLabelColumn>
                <FormComponentColumn>
                    <TextField
                        fullWidth
                        label="お問い合わせ内容"
                        id="inquiryDetails"
                        name="inquiryDetails"
                        multiline
                        rows={4}
                        value={formData.inquiryDetails}
                        onChange={handleChange}
                        margin="normal"
                    />
                </FormComponentColumn>
            </Grid2>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    sx={{
                        whiteSpace: 'pre-line',
                        textAlign: 'center',
                        fontSize: { xs: '12px', sm: '16px' },
                        marginTop: '60px'
                    }}
                >{`「プライバシーポリシー」に同意いただける場合は、
                「同意する」にチェックを入れて、お問い合わせ内容を送信してください。`}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '40px',
                }}
            >
                <FormControl error={errors.agreeToPrivacyPolicy} component="fieldset" margin="normal">
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={formData.agreeToPrivacyPolicy}
                                onChange={handleCheckboxChange}
                                id="agreeToPrivacyPolicy"
                                name="agreeToPrivacyPolicy"
                            />
                        }
                        label="同意する"
                    />
                    {errors.agreeToPrivacyPolicy && (
                        <FormHelperText>プライバシーポリシーに同意してください。</FormHelperText>
                    )}
                </FormControl>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '100px'
                }}
            >
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    sx={{
                        mt: 2,
                    }}
                >
                    送信
                </Button>
            </Box>
        </Container>
    );
}