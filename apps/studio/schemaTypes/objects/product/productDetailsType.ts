import {defineField} from 'sanity'

export const productDetailsType = defineField({
  name: 'productDetails',
  title: 'Product Details',
  type: 'object',
  fields: [
    defineField({
      name: 'material',
      type: 'string',
      title: 'Material',
      description: 'The primary material the tile is made from (e.g., ceramic, porcelain).',
    }),
    defineField({
      name: 'dimensions',
      type: 'string',
      title: 'Dimensions',
      description: 'Size of one tile, usually in millimeters (e.g., 75x300 mm).',
    }),
    defineField({
      name: 'thickness',
      type: 'string',
      title: 'Thickness',
      description: 'How thick the tile is, typically measured in millimeters.',
    }),
    defineField({
      name: 'tilesPerSqMetre',
      type: 'number',
      title: 'Tiles per sq metre',
      description: 'Number of tiles needed to cover one square metre.',
    }),
    defineField({
      name: 'tilesPerBox',
      type: 'number',
      title: 'Tiles per box',
      description: 'Total number of tiles contained in one box.',
    }),
    defineField({
      name: 'coveragePerBox',
      type: 'string',
      title: 'Coverage per box',
      description: 'Total area covered by one box of tiles (e.g., 0.5 m²).',
    }),
    defineField({
      name: 'color',
      type: 'string',
      title: 'Color',
      description: 'The color or shade of the tile.',
    }),
    defineField({
      name: 'finish',
      type: 'string',
      title: 'Finish',
      description: 'Surface appearance of the tile (e.g., gloss, matte).',
    }),
    defineField({
      name: 'texture',
      type: 'string',
      title: 'Texture',
      description: 'Physical surface feel or pattern (e.g., rippled, smooth).',
    }),
    defineField({
      name: 'wallOrFloorTile',
      type: 'string',
      title: 'Wall or floor tile',
      description: 'Specifies if the tile is meant for walls, floors, or both.',
      options: {
        list: ['Wall Tile', 'Floor Tile', 'Both'],
      },
    }),
    defineField({
      name: 'area',
      type: 'string',
      title: 'Area',
      description: 'Intended usage location — indoor or outdoor.',
      options: {
        list: ['Indoor', 'Outdoor', 'Both'],
      },
    }),
    defineField({
      name: 'glazed',
      type: 'boolean',
      title: 'Glazed',
      description: 'Indicates whether the tile has a glass-like protective coating.',
      initialValue: false,
    }),
    defineField({
      name: 'requiresSealing',
      type: 'boolean',
      title: 'Requires sealing',
      description: 'States if the tile needs sealing to protect it from stains or moisture.',
      initialValue: false,
    }),
    defineField({
      name: 'frostProof',
      type: 'boolean',
      title: 'Frost proof',
      description: 'Shows whether the tile can withstand freezing temperatures.',
      initialValue: false,
    }),
    defineField({
      name: 'rectifiedEdge',
      type: 'boolean',
      title: 'Rectified edge',
      description: 'Indicates if the tile edges are mechanically cut for precision installation.',
      initialValue: false,
    }),
    defineField({
      name: 'fireHearthsSurround',
      type: 'boolean',
      title: 'Fire hearths surround',
      description: 'Specifies if the tile is suitable for use around fireplaces or stoves.',
      initialValue: false,
    }),
    defineField({
      name: 'trimSize',
      type: 'string',
      title: 'Trim size',
      description: 'The size of any edge trim or finishing pieces used with the tile.',
    }),
  ],
})
