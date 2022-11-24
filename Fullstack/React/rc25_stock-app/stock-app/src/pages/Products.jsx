import { useEffect, useState } from "react";
import useStockCalls from "../hooks/useStockCalls";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";

import { useSelector } from "react-redux";
import { arrowStyle, btnHoverStyle } from "../styles/globalStyle";
import useSortColumn from "../hooks/useSortColumn";
import { MultiSelectBox, MultiSelectBoxItem } from "@tremor/react";

const Products = () => {
  const { getBrands, getCategories, getProducts } = useStockCalls();
  const { products, brands } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});
  const [selectedBrands, setSelectedBrands] = useState([]);
  useEffect(() => {
    getBrands();
    getCategories();
    getProducts();
  }, []);

  const columnObj = {
    brand: 1,
    name: 1,
    stock: 1,
  };

  const { sortedData, handleSort, columns } = useSortColumn(
    products,
    columnObj
  );

  // //? Siralanacak local state (sutun verilerinin local state hali)
  // const [sortedProducts, setSortedProducts] = useState(products);

  // //! product state'i her guncellendiginde local state'i de guncelle
  // useEffect(() => {
  //   setSortedProducts(products);
  // }, [products]);

  // const [toggle, setToggle] = useState({
  //   brand: 1,
  //   name: 1,
  //   stock: 1,
  // });

  //? Jenerik Sutun siralama fonksiyonu
  // const handleSort = (arg, type) => {
  //   setToggle({ ...toggle, [arg]: toggle[arg] * -1 });
  //   setSortedProducts(
  //     sortedProducts
  //       ?.map((item) => item)
  //       .sort((a, b) => {
  //         if (type === "date") {
  //           return toggle[arg] * (new Date(a[arg]) - new Date(b[arg]));
  //         } else if (type === "number") {
  //           return toggle[arg] * (a[arg] - b[arg]);
  //         } else {
  //           if (toggle[arg] === 1) {
  //             return b[arg] > a[arg] ? 1 : b[arg] < a[arg] ? -1 : 0;
  //           } else {
  //             return a[arg] > b[arg] ? 1 : a[arg] < b[arg] ? -1 : 0;
  //           }
  //         }
  //       })
  //   );
  // };

  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Products
      </Typography>

      <Button variant="contained" onClick={() => setOpen(true)}>
        New Product
      </Button>

      <MultiSelectBox
        handleSelect={(value) => setSelectedBrands(value)}
        placeholder="Select Brand"
        maxWidth="max-w-xs"
      >
        {brands?.map((item) => (
          <MultiSelectBoxItem
            key={item.name}
            value={item.name}
            text={item.name}
          />
        ))}
      </MultiSelectBox>

      {/*
      <ProductModal open={open} setOpen={setOpen} info={info} setInfo={setInfo} /> */}

      {sortedData?.length > 0 && (
        <TableContainer component={Paper} sx={{ mt: 3 }} elevation={10}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">#</TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">
                  <Box
                    sx={arrowStyle}
                    onClick={() => handleSort("brand", "text")}
                  >
                    <div>Brand</div>
                    {columns.brand === 1 && <UpgradeIcon />}
                    {columns.brand !== 1 && <VerticalAlignBottomIcon />}
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={arrowStyle}
                    onClick={() => handleSort("name", "text")}
                  >
                    <div>Name</div>
                    {columns.name === 1 && <UpgradeIcon />}
                    {columns.name !== 1 && <VerticalAlignBottomIcon />}
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={arrowStyle}
                    onClick={() => handleSort("stock", "number")}
                  >
                    <div>Stock</div>
                    {columns.stock === 1 && <UpgradeIcon />}
                    {columns.stock !== 1 && <VerticalAlignBottomIcon />}
                  </Box>
                </TableCell>
                <TableCell align="center">Operation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData?.map((product, index) => (
                <TableRow
                  key={product.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="center">{product.category}</TableCell>
                  <TableCell align="center">{product.brand}</TableCell>
                  <TableCell align="center">{product.name}</TableCell>
                  <TableCell align="center">{product.stock}</TableCell>
                  <TableCell align="center">
                    <DeleteIcon sx={btnHoverStyle} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Products;
