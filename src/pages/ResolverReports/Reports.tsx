import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import Title from "./Title";

function cutString(str: string, maxLength: number) {
    const suffix = str && str.length > maxLength ? "..." : "";
    return str.substring(0, maxLength) + suffix;
}

function createDate(id: number, date: string, title: string, description: string, author: string, image: string) {
    return { id, date, title, description, author, image };
}

const rows = [
    createDate(1, "12:42 PM 26/11/2022", "Gần nhà tôi đầy rác", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum modi quas blanditiis, sapiente odit maxime eligendi voluptate quasi ex ad. Doloremque veniam tenetur quae, ipsum a ad? Exercitationem, veritatis.", "user1", "https://source.unsplash.com/random/800x800/?img=1"),
    createDate(2, "12:42 PM 26/11/2022", "Gần nhà tôi đầy rác", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum modi quas blanditiis, sapiente odit maxime eligendi voluptate quasi ex ad. Doloremque veniam tenetur quae, ipsum a ad? Exercitationem, veritatis.", "user2", "https://source.unsplash.com/random/800x800/?img=1"),
    createDate(3, "12:42 PM 26/11/2022", "Gần nhà tôi đầy rác", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum modi quas blanditiis, sapiente odit maxime eligendi voluptate quasi ex ad. Doloremque veniam tenetur quae, ipsum a ad? Exercitationem, veritatis.", "user3", "https://source.unsplash.com/random/800x800/?img=1"),
    createDate(4, "12:42 PM 26/11/2022", "Gần nhà tôi đầy rác", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum modi quas blanditiis, sapiente odit maxime eligendi voluptate quasi ex ad. Doloremque veniam tenetur quae, ipsum a ad? Exercitationem, veritatis.", "user4", "https://source.unsplash.com/random/800x800/?img=1")
];

function Reports() {
    function handleOnClick() {
        console.log("Clicked!");
    }
    return (
        <React.Fragment>
            <Title>Danh sách báo cáo</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Tiêu đề</TableCell>
                        <TableCell>Mô tả</TableCell>
                        <TableCell>Tác giả</TableCell>
                        <TableCell>Ngày đăng</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id} onClick={handleOnClick}>
                            <TableCell>{row.title}</TableCell>
                            <TableCell>{cutString(row.description, 40)}</TableCell>
                            <TableCell>{row.author}</TableCell>
                            <TableCell>{row.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}

export default Reports;