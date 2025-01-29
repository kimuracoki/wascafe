import ContentTitle from "@/components/ContentTitle";
import { Button, Checkbox, Container, FormControl, FormControlLabel, FormHelperText, Grid2, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { useState } from "react";

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

        // バリデーションチェック
        const newErrors = {
            name: formData.name.trim() === '',
            email: !/\S+@\S+\.\S+/.test(formData.email), // メール形式の簡易チェック
            inquiryType: formData.inquiryType === '',
            agreeToPrivacyPolicy: !formData.agreeToPrivacyPolicy,
        };
        setErrors(newErrors);

        // エラーがなければ送信処理
        if (!Object.values(newErrors).includes(true)) {
            console.log('フォームデータ:', formData);
            alert('フォームが送信されました！');
            // 必要に応じて送信後にフォームをリセット
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
                <Grid2 width={{ xs: '100%', sm: '300px' }}>
                    <Typography>お名前（必須）</Typography>
                </Grid2>
                <Grid2 width={{ xs: '100%', sm: '500px' }}>
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
                </Grid2>
            </Grid2>
            <Grid2
                container
                direction="row"
            >
                <Grid2 width={{ xs: '100%', sm: '300px' }}>
                    <Typography>メールアドレス（必須）</Typography>
                </Grid2>
                <Grid2 width={{ xs: '100%', sm: '500px' }}>
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
                </Grid2>
            </Grid2>
            <Grid2
                container
                direction="row"
            >
                <Grid2 width={{ xs: '100%', sm: '300px' }}>
                    <Typography>お電話番号</Typography>
                </Grid2>
                <Grid2 width={{ xs: '100%', sm: '500px' }}>
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
                </Grid2>
            </Grid2>
            <Grid2
                container
                direction="row"
            >
                <Grid2 width={{ xs: '100%', sm: '300px' }}>
                    <Typography>お問い合わせの種類</Typography>
                </Grid2>
                <Grid2 width={{ xs: '100%', sm: '500px' }}>
                    <FormControl component="fieldset" margin="normal" fullWidth error={errors.inquiryType}>
                        <Typography variant="subtitle1">お問い合わせの種類</Typography>
                        <RadioGroup
                            name="inquiryType"
                            value={formData.inquiryType}
                            onChange={handleChange}
                            row
                        >
                            <FormControlLabel value="お席の予約" control={<Radio />} label="お席の予約" />
                            <FormControlLabel value="貸切のご相談" control={<Radio />} label="貸切のご相談" />
                            <FormControlLabel value="その他" control={<Radio />} label="その他" />
                        </RadioGroup>
                        {errors.inquiryType && (
                            <FormHelperText>お問い合わせの種類を選択してください。</FormHelperText>
                        )}
                    </FormControl>
                </Grid2>
            </Grid2>
            <Grid2
                container
                direction="row"
            >
                <Grid2 width={{ xs: '100%', sm: '300px' }}>
                    <Typography>お問い合わせ内容</Typography>
                </Grid2>
                <Grid2 width={{ xs: '100%', sm: '500px' }}>
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
                </Grid2>
            </Grid2>
            <Grid2
                container
                direction="row"
            >
                <Grid2 width={{ xs: '100%', sm: '600px' }}>
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
                            label="プライバシーポリシーに同意します"
                        />
                        {errors.agreeToPrivacyPolicy && (
                            <FormHelperText>プライバシーポリシーに同意してください。</FormHelperText>
                        )}
                    </FormControl>
                </Grid2>
            </Grid2>
            <Grid2
                container
                direction="row"
            >
                <Grid2 width={{ xs: '100%', sm: '600px' }}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        sx={{ mt: 2 }}
                    >
                        送信
                    </Button>
                </Grid2>
            </Grid2>
        </Container>
    );
}