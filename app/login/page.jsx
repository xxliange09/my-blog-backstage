"use client"
import React from "react"
import axios from "axios"
import styles from './page.module.scss'

const LoginPage = () => {
    const [isSubmit, setSubmit] = React.useState(false);
    const [user, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');

    // React.useEffect(() => {
    //     const getData = async () => {
    //         const res = await axios.get("http://localhost:3000/api/user");
    //         console.log(res);
    //     };
    //     getData();
    // }, []);
    React.useEffect(() => {
        if (isSubmit) {
            console.log(user, password);
            userLogin(user, password);
            setSubmit(false);

        }
    }, [isSubmit]);
    const userLogin = async (user, pass) => {
        const res = await axios.post(`http://localhost:3000/api/user/login`, {
            user, pass
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        if (res.data.code === 0) {
            alert(`登录成功，用户信息是：${JSON.stringify(res.data.data)}`)
        } else {
            alert(res.data.data);
        }
    }
    return (
        <div className={styles.loginPage}>
            {/* 登录模块 */}
            <section className={styles.main}>
                {/* 背景图展示模块 */}
                <div className={styles.left}></div>
                {/* 登录操作模块 */}
                <div className={styles.right}>
                    <h1>XIAO小恋歌-BLOG</h1>
                    <section className={styles['login-section']}>
                        <p className={styles.label}>账号</p>
                        <input type='text' className={styles.input} onInput={e => setUser(e.target.value)} />
                    </section>
                    <section className={styles['login-section']}>
                        <p className={styles.label}>密码</p>
                        <input type='password' className={styles.input} onInput={e => setPassword(e.target.value)} />
                    </section>
                    <section className={styles.button} onClick={() => setSubmit(true)}>
                        <p>登录</p>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default LoginPage;