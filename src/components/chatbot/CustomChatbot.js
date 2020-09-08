import React from 'react'
import ChatBot from 'react-simple-chatbot'
import './CustomChatbot.css'
import { ThemeProvider } from "styled-components"

function CustomChatbot() {
    
    const theme = {
        background: "white",
        fontFamily: "sans-serif",
        headerBgColor: "#2064A1",
        headerFontColor: "#fff",
        headerFontSize: "12pt",
        botBubbleColor: "#2064A1",
        botFontColor: "#fff",
        userBubbleColor: "#221E1F",
        userFontColor: "#FAF3DD",
        
    };
    
    const config = {
        width: "320px",
        height: "400px",
        botAvatar: "https://image.flaticon.com/icons/svg/740/740087.svg",
        userAvatar: "https://image.flaticon.com/icons/svg/149/149071.svg",
        floatingIcon: "https://image.flaticon.com/icons/svg/740/740087.svg",
        floating: true
    };

    const steps=[
        {
            id: "start",
            message: "Hai! 👋",
            trigger: "start2"
        },
        {
            id: "start2",
            message: "Selamat datang di halaman utama GIS Mapid.",
            trigger: "start3"
        },
        {
            id: "start3",
            message: "Silahkan pilih apa yang ingin anda jelajahi:",
            trigger: "menu"
        },
        {
            id: "menu",
            options: [
                {
                    value: 1,
                    label: "Pertanyaan",
                    trigger: "listquest1"
                },
                {
                    value: 2,
                    label: "Direct Link",
                    trigger: "linklist1"
                },
            ],
        },
        {
            id: "listquest1",
            message: "Berikut ini adalah beberapa pertanyaan yang dapat diketahui:",
            trigger: "quest"
        },
        {
            id: "quest",
            options: [
                {
                    value: 1,
                    label: "Apa itu GEO Mapid?",
                    trigger: "questGEO"
                },
                {
                    value: 2,
                    label: "Bagaimana cara membuat project?",
                    trigger: "questHowTo"
                },
                {
                    value: 3,
                    label: "Bagaimana cara menambahkan layer?",
                    trigger: "questLayer"
                },
                {
                    value: 4,
                    label: "File apa sajakah yang dapat diunggah?",
                    trigger: "questUpload"
                },
            ],
        },
        {
            id: "questGEO",
            component: (
                <div>
                    <p>
                        GEO Mapid adalah sebuah layanan yang dapat menganalisis semua jenis data yang Anda inginkan dengan cara yang paling menarik dan termudah
                    </p>
                </div>
            ),
            trigger: "re_question"
        },
        {
            id: "questHowTo",
            component: (
                <div>
                    <p>
                        Pertama, tekan tombol <b>Create Project</b>, lalu akan muncul sebuah pop up berisi nama projek dan deskripsi projek.
                        Isi sesuai dengan apa yang akan dibuat agar tidak terlalu membingungkan nantinya.
                        Apabila sudah, tekan tombol <b>Create</b> untuk menyelesaikan pembuatan projek yang akan dibuat. 
                    </p>
                </div>
            ),
            trigger: "re_question"
        },
        {
            id: "questLayer",
            component: (
                <div>
                    <p>
                        Tekan tombol <b>Map Editor</b> yang ada di halaman dashboard untuk menambahkan sebuah layer baru.
                        Setelah masuk ke halaman map editor, terdapat beberapa menu yang berada di samping kiri peta.
                        Pilih <b>New Layer</b> untuk menambahkan layer baru. Terdapat berapa form yang harus diisi:
                        <ul>
                            <li>1. Layer Name, untuk memberi nama layer</li>
                            <li>2. Layer Description, untuk memberi deskripsi layer</li>
                            <li>3. Terdapat pilihan, di antaranya ada point, lineString dan Polygon. Semuanya merupakan tipe dari geometri</li>
                            <li>4. Outside group, pemberian layer berada di luar grup yang dibuat.</li>
                        </ul>
                    </p>
                </div>
            ),
            
            delay: 1000,
            trigger: "re_question"
        },
        {
            id: "questUpload",
            component: (
                <p className="">
                    GEO Mapid adalah sebuah layanan yang dapat menganalisis semua jenis data yang Anda inginkan dengan cara yang paling menarik dan termudah
                </p>
            ),
            
            delay: 1000,
            trigger: "re_question"
        },
        {
            id: "linklist1",
            message: "Berikut ini adalah beberapa navigasi yang dapat dijelajahi, silahkan klik untuk mengakses link nya",
            trigger: "linklist"
        },
        {
            id: "linklist",
            options: [
                {
                    value: 1,
                    label: "Halaman Profil",
                    trigger: "linkprofil"
                },
                {
                    value: 2,
                    label: "Halaman Grup",
                    trigger: "linkgrup"
                },
                {
                    value: 1,
                    label: "Halaman Quick Map",
                    trigger: "linkmaps"
                },
                {
                    value: 1,
                    label: "Halaman Public Project",
                    trigger: "linkpublic"
                },
            ],
        },
        {
            id: "linkprofil",
            component: (
                <div>
                    <a href="https://gis.mapid.io/user_profile">
                        Akses di sini
                    </a>
                </div>
            ),
            end: true
        },
        {
            id: "linkgrup",
            component: (
                <div>
                    <a href="https://gis.mapid.io/user_group">
                        Akses di sini
                    </a>
                </div>
            ),
            end: true
        },
        {
            id: "linkmaps",
            component: (
                <div>
                    <a href="https://gis.mapid.io/map_view">
                        Akses di sini
                    </a>
                </div>
            ),
            end: true
        },
        {
            id: "linkpublic",
            component: (
                <div>
                    <a href="https://gis.mapid.io/public">
                        Akses di sini
                    </a>
                </div>
            ),
            end: true
        },
        {
            id: "re_question",
            message: "Ada yang ingin ditanyakan lagi?",
            trigger: "re_question-option",
        },
        {
            id: "re_question-option",
            options: [
                {
                    value: 1,
                    label: "Ya",
                    trigger: "start3"
                },
                {
                    value: 2,
                    label: "Tidak",
                    trigger: "final"
                },
            ],
            trigger: "re_question-option"
        },
        {
            id: "final",
            message: "Terima kasih",
            end: true
        },
    ];  
    
    return (
        <ThemeProvider theme={theme}>
            <ChatBot steps={steps} {...config} />
        </ThemeProvider>
    )
}

export default CustomChatbot
