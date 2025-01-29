import ContentTitle from "@/components/ContentTitle";
import { Button, Checkbox, Container, FormControl, FormControlLabel, FormHelperText, Grid2, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { useState } from "react";
import FormLabelColumn from "./components/FormLabelColumn";
import FormComponentColumn from "./components/FormComponentColumn";

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
                minHeight: '100vh'
            }} >
            <ContentTitle title="お問い合わせ" />
            <Typography
                sx={{
                    whiteSpace: 'pre-line',
                    lineHeight: '2rem',
                }}>{`ワズカフェでは、お席のご予約、お誕生日のお祝いや貸切のご相談などを随時受け付けております。
                        お気軽にお問い合わせください。`}</Typography>
            <Grid2
                container
                direction="row"
            >
                <FormLabelColumn>
                    <Typography>お名前（必須）</Typography>
                </FormLabelColumn>
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
            </Grid2>
            <Grid2
                container
                direction="row"
            >
                <FormLabelColumn>
                    <Typography>メールアドレス（必須）</Typography>
                </FormLabelColumn>
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
            </Grid2>
            <Grid2
                container
                direction="row"
            >
                <FormLabelColumn>
                    <Typography>お電話番号</Typography>
                </FormLabelColumn>
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
            </Grid2>
            <Grid2
                container
                direction="row"
            >
                <FormLabelColumn>
                    <Typography>お問い合わせの種類</Typography>
                </FormLabelColumn>
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
                            <FormControlLabel value="お席の予約" control={<Radio />} label="お席の予約" />
                            <FormControlLabel value="貸切のご相談" control={<Radio />} label="貸切のご相談" />
                            <FormControlLabel value="その他" control={<Radio />} label="その他" />
                        </RadioGroup>
                        {errors.inquiryType && (
                            <FormHelperText>お問い合わせの種類を選択してください。</FormHelperText>
                        )}
                    </FormControl>
                </FormComponentColumn>
            </Grid2>
            <Grid2
                container
                direction="row"
            >
                <FormLabelColumn>
                    <Typography>お問い合わせ内容</Typography>
                </FormLabelColumn>
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
            <Typography>「プライバシーポリシー」に同意いただける場合は「同意する」にチェックを入れて、お問い合わせ内容を送信してください。</Typography>
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
            <Container>
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
            </Container>
        </Container>
    );
}