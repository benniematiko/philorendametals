import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Define clean, industrial-themed styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: '#333333',
    backgroundColor: '#ffffff',
  },
  // Cover Page Styles
  coverContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    border: '4pt solid #003366',
    padding: 20,
  },
  brandTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  brandSub: {
    fontSize: 12,
    color: '#ff6600',
    letterSpacing: 3,
    marginBottom: 40,
  },
  catalogTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#222222',
  },
  divider: {
    width: 150,
    height: 2,
    backgroundColor: '#ff6600',
    marginBottom: 30,
  },
  metadata: {
    fontSize: 10,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 1.6,
  },
  // Product List Styles
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003366',
    marginTop: 20,
    marginBottom: 10,
    borderBottom: '1pt solid #003366',
    paddingBottom: 5,
  },
  productCard: {
    marginBottom: 15,
    padding: 10,
    borderBottom: '0.5pt solid #e0e0e0',
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  productName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#222222',
    width: '70%',
  },
  productPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ff6600',
    width: '30%',
    textAlign: 'right',
  },
  productDetail: {
    fontSize: 9,
    color: '#555555',
    marginBottom: 8,
    lineHeight: 1.4,
  },
  specsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#f8f9fa',
    padding: 6,
    borderRadius: 4,
  },
  specItem: {
    width: '50%',
    flexDirection: 'row',
    marginBottom: 3,
  },
  specLabel: {
    fontWeight: 'bold',
    color: '#003366',
    fontSize: 8,
    marginRight: 4,
    textTransform: 'capitalize',
  },
  specVal: {
    color: '#444444',
    fontSize: 8,
  },
  footer: {
    position: 'absolute',
    bottom: 25,
    left: 40,
    right: 40,
    borderTop: '0.5pt solid #cccccc',
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 8,
    color: '#999999',
  }
});

// The actual PDF document structure
export const ProductCataloguePDF = ({ products }) => (
  <Document>
    {/* PAGE 1: COVER PAGE */}
    <Page size="A4" style={styles.page}>
      <View style={styles.coverContainer}>
        <Text style={styles.brandTitle}>Philorenda Metal Works</Text>
        <Text style={styles.brandSub}>INDUSTRIAL FABRICATION</Text>
        <Text style={styles.catalogTitle}>PRODUCT CATALOGUE</Text>
        <View style={styles.divider} />
        <Text style={styles.metadata}>
          Engineered Machinery, Steel Castings & Structural Hardware{"\n"}
          Operational Matrix & Technical Specifications{"\n\n"}
          Location: Nairobi, Kenya{"\n"}
          Contact: info@philorenda.com | +254 (0) XXX XXX XXX
        </Text>
      </View>
    </Page>

    {/* PAGE 2+: PRODUCT LISTINGS */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionHeader}>Industrial Machinery & Hardware Catalog</Text>
      
      {products.map((product) => (
        <View key={product.id} style={styles.productCard} wrap={false}>
          <View style={styles.productHeader}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </View>
          
          <Text style={styles.productDetail}>{product.detail}</Text>
          
          {/* Technical Specs Box */}
          <View style={styles.specsGrid}>
            {Object.entries(product.specs).map(([key, val]) => (
              <View key={key} style={styles.specItem}>
                <Text style={styles.specLabel}>{key}:</Text>
                <Text style={styles.specVal}>{val}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}

      {/* Persistent Footer */}
      <View style={styles.footer} fixed>
        <Text>Philorenda Metal Works - Official Product Catalogue</Text>
        <Text render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`} />
      </View>
    </Page>
  </Document>
);