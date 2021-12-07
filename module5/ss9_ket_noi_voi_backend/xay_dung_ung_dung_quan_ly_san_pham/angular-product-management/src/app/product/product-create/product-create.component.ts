import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });
  categoryList: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAllCategory();
  }

  saveProduct() {
    const product = this.productForm.value;
    product.category = {
      id: product.category
    };
    this.productService.saveProduct(product).subscribe(() => {
      this.productForm.reset();
    }, error => {
      console.log(error);
    });
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(categoryList => {
      this.categoryList = categoryList;
    });
  }
}
