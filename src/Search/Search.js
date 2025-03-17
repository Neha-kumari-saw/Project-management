import React from "react";
import { InputAdornment, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
    return (
        <div className="Search">
            <TextField
                label="Search"
                varient="outlined"
                // fullWidth
                // value={searchQuery}
                // onChange={handleSearchChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                style={{ marginBottom: '20px', width: '200px' }}
            />

            <Button className="primary_button">Add New</Button>
        </div>
    )
}
export default Search;